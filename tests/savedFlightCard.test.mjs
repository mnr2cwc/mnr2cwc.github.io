import { createServer as createHttpServer } from 'node:http'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { test } from 'node:test'
import ts from 'typescript'
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

const source = readFileSync(new URL('../src/flights/itinerary.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText
const { validLegs, displayLegs } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
const outbound = {
  origin: 'ORD', destination: 'DPS', originCity: 'Chicago', destinationCity: 'Denpasar (Bali)',
  departureTime: '12:30 pm', arrivalTime: '11:50 pm', departureDate: '2027-06-26', arrivalDate: '2027-06-27', duration: '22h 20m', stops: ['ICN'],
}
const inbound = {
  origin: 'DPS', destination: 'ORD', originCity: 'Denpasar (Bali)', destinationCity: 'Chicago',
  departureTime: '01:10 am', arrivalTime: '09:40 am', departureDate: '2027-07-10', arrivalDate: '2027-07-10', duration: '21h 30m', stops: ['ICN'],
}
const flight = { origin: 'ORD', destination: 'DPS', departure: '2027-06-26', returnDate: '2027-07-10', airline: 'Korean Air', flightNumbers: '', price: 929, currency: 'USD', link: 'https://example.com/flights', notes: 'Compare baggage before booking.', fareSummary: 'Baggage included', legs: [outbound, inbound], savedAt: new Date('2026-10-24T12:00:00Z') }

test('structured itinerary survives JSON storage, while malformed or oversized lists are rejected', () => {
  assert.equal(validLegs(JSON.parse(JSON.stringify(flight.legs))), true)
  assert.equal(validLegs([outbound, inbound, outbound]), false)
  assert.equal(validLegs([{ ...outbound, stops: ['ORD', 'ICN', 'DPS', 'NRT', 'HND', 'DOH', 'SIN'] }]), false)
  assert.equal(validLegs([{ ...outbound, stops: ['not an airport'] }]), false)
  assert.equal(validLegs([{ ...outbound, duration: 'x'.repeat(81) }]), false)
  assert.equal(validLegs([{ ...outbound, extra: 'unexpected' }]), false)
})

test('older flights keep routes and dates without inventing timing information', () => {
  const legs = displayLegs({ ...flight, legs: undefined })
  assert.equal(legs.length, 2)
  assert.equal(legs[0].origin, 'ORD')
  assert.equal(legs[1].origin, 'DPS')
  assert.equal(legs[0].departureTime, '')
  assert.equal(legs[1].departureDate, '2027-07-10')
  assert.equal(displayLegs({ ...flight, returnDate: '', legs: undefined }).length, 1)
})

test('saved card and review preview render price, both itineraries, stops, baggage, and safe actions', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: { server: createHttpServer() } }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' })
  try {
    const { default: Card } = await server.ssrLoadModule('/src/components/SavedFlightCard.vue')
    const html = await renderToString(createSSRApp(Card, { flight, canRemove: true }))
    const document = new JSDOM(html).window.document
    assert.equal(document.querySelectorAll('.journey').length, 2)
    for (const expected of ['$929', 'Korean Air', '12:30 pm', '11:50 pm', '01:10 am', '09:40 am', 'Travel time: 22h 20m', 'Chicago', 'Denpasar (Bali)', 'Baggage included', 'ICN']) assert.ok(document.body.textContent.includes(expected), expected)
    assert.equal(document.querySelectorAll('.route-track span').length, 4)
    assert.equal(document.querySelector('.view-button').getAttribute('href'), flight.link)
    assert.ok(document.querySelector('.remove-button'))
    const preview = await renderToString(createSSRApp(Card, { flight, preview: true }))
    assert.equal(new JSDOM(preview).window.document.querySelector('.view-button'), null)
    const legacy = await renderToString(createSSRApp(Card, { flight: { ...flight, legs: undefined, link: 'javascript:alert(1)' } }))
    const oldDocument = new JSDOM(legacy).window.document
    assert.equal(oldDocument.querySelector('.view-button'), null)
    assert.ok(oldDocument.body.textContent.includes('Time not saved'))
  } finally { await server.close() }
})
