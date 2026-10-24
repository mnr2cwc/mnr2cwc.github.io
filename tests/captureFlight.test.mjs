import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { test } from 'node:test'
import ts from 'typescript'
import { JSDOM } from 'jsdom'

// Type-only data imports are erased; exercise the actual adapter with no Firebase calls.
const source = readFileSync(new URL('../src/flights/captureFlight.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText
const { captureFlightDetail, readPrice, installFlightCapture } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
const fixture = readFileSync(new URL('./fixtures/flight-detail.html', import.meta.url), 'utf8')
const context = { url: 'https://example.com/trip?flightSearch=JFK2506DPS11071&ticketId=stale-ticket&private=discard', currency: 'USD', now: new Date(2026, 9, 24) }
const modal = () => new JSDOM(fixture).window.document.querySelector('div')
const select = (root, part) => root.querySelector(`[class*="${part}___"]`)

test('captures a round trip with connection details and the currently selected ticket link', () => {
  const result = captureFlightDetail(modal(), context)
  assert.equal(result.details.origin, 'JFK')
  assert.equal(result.details.destination, 'DPS')
  assert.equal(result.details.departure, '2027-06-25')
  assert.equal(result.details.returnDate, '2027-07-11')
  assert.equal(result.details.airline, 'Qatar Airways, Singapore Airlines')
  assert.equal(result.details.price, 1234.56)
  assert.equal(result.details.currency, 'USD')
  assert.match(result.details.notes, /8:25 pm/)
  assert.match(result.details.notes, /Layover: Doha Layover 2h 15m/)
  assert.match(result.details.notes, /Checked baggage included/)
  const url = new URL(result.details.link)
  assert.equal(url.searchParams.get('ticketId'), 'selected-ticket')
  assert.equal(url.searchParams.has('private'), false)
  assert.equal(result.details.flightNumbers, '')
  assert.deepEqual(result.details.legs[0], {
    origin: 'JFK', destination: 'DPS', originCity: 'New York', destinationCity: 'Bali',
    departureTime: '8:25 pm', arrivalTime: '9:00 am', departureDate: '2027-06-25', arrivalDate: '2027-06-27',
    duration: '22h 20m', stops: ['DOH'],
  })
  assert.equal(result.details.legs[1].duration, '21h 30m')
  assert.equal(result.details.legs[1].origin, 'DPS')
  assert.match(result.details.fareSummary, /Checked baggage included/)
})

test('parses prices with different decimal/grouping formats', () => {
  for (const [raw, expected] of [['$1,234.56', 1234.56], ['1.234,56 €', 1234.56], ['1\u202f234 €', 1234], ['$1,234', 1234], ['IDR 1.234.567', 1234567], ['$9.5', 9.5], ['Loading…', 0]]) {
    assert.equal(readPrice(raw), expected, raw)
  }
})

test('leaves missing or uncertain information for review instead of using trip defaults', () => {
  const root = modal()
  select(root, 'FlightItem-module__day').textContent = 'Mon, Jun 25' // inferred year disagrees with weekday
  select(root, 'ProposaCard-module__price').textContent = 'Loading…'
  const result = captureFlightDetail(root, { ...context, currency: '' })
  assert.equal(result.details.departure, '')
  assert.equal(result.details.price, 0)
  assert.equal(result.details.currency, '')
  assert.ok(result.warnings.some(message => message.includes('blank fields')))
})

test('ignores outdated fares and uses the first currently available offer', () => {
  const root = modal()
  const old = select(root, 'ProposaCard-module__root').cloneNode(true)
  select(old, 'ProposaCard-module__price').classList.add('ProposaCard-module__disabled___newHash')
  select(old, 'ProposaCard-module__price').textContent = '$50'
  root.prepend(old)
  assert.equal(captureFlightDetail(root, context).details.price, 1234.56)
})

test('falls back to a search link when the share link is absent or points to another site', () => {
  const root = modal()
  root.querySelector('a').href = 'https://tpscr.com/wl/redirect?fallback_url=https%3A%2F%2Fevil.example%2Ftrip%3FflightSearch%3DJFK2506DPS11071%26ticketId%3Dwrong'
  const result = captureFlightDetail(root, context)
  assert.equal(new URL(result.details.link).searchParams.has('ticketId'), false)
  assert.ok(result.warnings.some(message => message.includes('reopens the search')))
})

test('handles one-way and return departures across New Year', () => {
  const root = modal()
  select(root, 'FlightItem-module__day').textContent = 'Thu, Dec 31'
  const segments = root.querySelectorAll('[class*="TicketFlights-module__root___"]')
  select(segments[1], 'FlightItem-module__day').textContent = 'Fri, Jan 1'
  const result = captureFlightDetail(root, context)
  assert.equal(result.details.departure, '2026-12-31')
  assert.equal(result.details.returnDate, '2027-01-01')
  segments[1].remove()
  assert.equal(captureFlightDetail(root, context).details.returnDate, '')
})

test('rejects loading/unsupported markup and multi-city itineraries with a manual fallback', () => {
  const root = modal()
  root.append(select(root, 'TicketFlights-module__root').cloneNode(true))
  assert.throws(() => captureFlightDetail(root, context), /multiple destinations/)
  assert.throws(() => captureFlightDetail(new JSDOM('<div>Loading</div>').window.document.body, context), /full details/)
})

test('injects one button into open shadow DOM, respects sign-in, captures only on click, and cleans up', async () => {
  const dom = new JSDOM('<div id="tpwl-search"></div><div id="tpwl-modals"></div>', { url: context.url, pretendToBeVisual: true })
  for (const name of ['window', 'document', 'Element', 'MutationObserver']) globalThis[name] = dom.window[name]
  dom.window.TPWL_BACKEND_CONFIGURATION = { defaultCurrency: 'USD' }
  const shadow = dom.window.document.getElementById('tpwl-modals').attachShadow({ mode: 'open' })
  shadow.innerHTML = fixture
  let signedIn = false, captured = null, closed = 0, bookings = 0
  select(shadow, 'TicketDetail-module__close').addEventListener('click', () => closed++)
  shadow.querySelector('a').addEventListener('click', event => { event.preventDefault(); bookings++ })
  const controller = installFlightCapture({ canCapture: () => signedIn, isActive: () => true, onCapture: result => { captured = result }, onError: assert.fail })
  try {
    let button = shadow.querySelector('[data-trip-capture]')
    assert.equal(button.disabled, true)
    signedIn = true
    controller.refresh(); controller.refresh()
    assert.equal(shadow.querySelectorAll('[data-trip-capture]').length, 1)
    assert.equal(captured, null)
    button.click()
    assert.equal(captured.details.currency, 'USD')
    assert.equal(closed, 1)
    assert.equal(bookings, 0)
    shadow.innerHTML = fixture
    await new Promise(resolve => setTimeout(resolve, 0))
    assert.equal(shadow.querySelectorAll('[data-trip-capture]').length, 1)
  } finally {
    controller.stop()
    assert.equal(shadow.querySelector('[data-trip-capture]'), null)
    dom.window.close()
  }
})

test('preserves both airports when a connection requires changing airports', () => {
  const root = modal()
  const points = select(root, 'TicketFlights-module__root').querySelectorAll('[class*="FlightItem-module__airport___"]')
  points[1].textContent = 'Haneda, HND'
  points[2].textContent = 'Narita, NRT'
  assert.deepEqual(captureFlightDetail(root, context).details.legs[0].stops, ['HND', 'NRT'])
})
