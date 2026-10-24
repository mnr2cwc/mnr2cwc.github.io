import type { FlightLeg } from './itinerary'
import type { FlightDetails } from '../data/savedFlights'

// The provider exposes an open shadow root, but no selected-ticket data callback.
// Keep its DOM adapter here and use class prefixes rather than build-specific hashes.
const selector = (part: string) => `[class*="${part}___"]`
const one = (root: ParentNode, part: string) => root.querySelector(selector(part))
const all = (root: ParentNode, part: string) => Array.from(root.querySelectorAll(selector(part)))
const text = (node: Element | null) => node?.textContent?.replace(/\s+/g, ' ').trim() ?? ''

export interface CapturedFlight {
  details: FlightDetails
  warnings: string[]
  returnExpected: boolean
}
export interface CaptureContext {
  url: string
  currency?: string
  now?: Date
}

export function readPrice(value: string): number {
  const raw = value.replace(/[^\d.,]/g, '')
  if (!raw) return 0
  // Treat one or two trailing decimal digits as cents. Spaces and grouping separators
  // are discarded, so both $1,234.56 and 1.234,56 € work independently of locale.
  const cents = /[.,](\d{1,2})$/.exec(raw)
  const amount = cents
    ? Number(`${raw.slice(0, cents.index).replace(/\D/g, '')}.${cents[1]}`)
    : Number(raw.replace(/\D/g, ''))
  return Number.isFinite(amount) ? amount : 0
}

function readDate(value: string, baseline: Date): string {
  const iso = /\b(\d{4}-\d{2}-\d{2})\b/.exec(value)?.[1]
  if (iso) return iso
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  const month = months.findIndex(name => value.toLowerCase().includes(name))
  const day = Number(value.match(/\b\d{1,2}\b/)?.[0])
  if (month < 0 || !day) return ''
  const explicitYear = value.match(/\b20\d{2}\b/)?.[0]
  let year = explicitYear ? Number(explicitYear) : baseline.getFullYear()
  let date = new Date(year, month, day)
  if (!explicitYear && date < new Date(baseline.getFullYear(), baseline.getMonth(), baseline.getDate())) {
    date = new Date(++year, month, day)
  }
  if (date.getMonth() !== month || date.getDate() !== day) return ''
  // A weekday mismatch means the inferred year is uncertain; require user input.
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const weekday = weekdays.findIndex(name => value.toLowerCase().includes(name))
  if (weekday >= 0 && weekday !== date.getDay()) return ''
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function airport(endpoint: Element | undefined): string {
  return text(endpoint ? one(endpoint, 'FlightItem-module__airport') : null).match(/\b[A-Z]{3}\s*$/)?.[0]?.trim() ?? ''
}
function endpointNote(endpoint: Element): string {
  return ['day', 'time', 'city', 'airport'].map(part => text(one(endpoint, `FlightItem-module__${part}`))).filter(Boolean).join(' · ')
}
function readableText(node: Element | null): string {
  if (!node) return ''
  // Separate adjacent labels even where the widget has no whitespace text nodes.
  return Array.from(node.childNodes).map(child => child.nodeType === 3 ? child.textContent : child.nodeType === 1 ? readableText(child as Element) : '')
    .join(' ').replace(/\s+/g, ' ').trim()
}

export function captureFlightDetail(modal: Element, context: CaptureContext): CapturedFlight {
  const segments = all(modal, 'TicketFlights-module__root')
  if (!segments.length) throw new Error('Flight details are still loading or could not be read. Open a flight’s full details and try again, or use the manual form.')
  if (segments.length > 2) throw new Error('This itinerary has multiple destinations. Please use the manual form and include all legs in the notes.')
  const endpoints = segments.map(segment => all(segment, 'FlightItem-module__root'))
  if (endpoints.some(points => points.length < 2)) throw new Error('The itinerary is incomplete. Wait for the flight details to finish loading and try again.')
  const origin = airport(endpoints[0][0])
  const destination = airport(endpoints[0][endpoints[0].length - 1])
  const airlines = [...new Set(all(modal, 'ItineraryFlight-module__airlineName').map(text).filter(Boolean))]
  const now = context.now ?? new Date()
  const departure = readDate(text(one(endpoints[0][0], 'FlightItem-module__day')), now)
  const returnDate = endpoints[1] ? readDate(text(one(endpoints[1][0], 'FlightItem-module__day')), departure ? new Date(`${departure}T12:00:00`) : now) : ''
  const proposals = all(modal, 'ProposaCard-module__root')
  const proposal = proposals.find(item => {
    const price = one(item, 'ProposaCard-module__price')
    return price && !price.className.includes('ProposaCard-module__disabled___')
  })
  const priceText = proposal ? text(one(proposal, 'ProposaCard-module__price')) : ''
  const currency = context.currency?.match(/^[A-Z]{3}$/)?.[0] ?? priceText.match(/\b[A-Z]{3}\b/)?.[0] ?? ''
  const warnings = ['Check the captured dates (including the year), price, currency, and passengers before sharing.']
  if (!origin || !destination || !departure || (segments.length === 2 && !returnDate) || !airlines.length || !readPrice(priceText) || !currency) {
    warnings.push('Some details could not be read. Complete the blank fields before saving.')
  }
  if (endpoints[1] && (airport(endpoints[1][0]) !== destination || airport(endpoints[1][endpoints[1].length - 1]) !== origin)) {
    warnings.push('The return uses different airports. Review both legs in the notes.')
  }
  const notes = segments.map((segment, index) => {
    const lines = all(segment, 'ItineraryFlight-module__root').map(flight => {
      const points = all(flight, 'FlightItem-module__root')
      return [text(one(flight, 'ItineraryFlight-module__airlineName')), ...points.map(endpointNote)].filter(Boolean).join('\n')
    })
    const transfers = all(segment, 'ItineraryTransfer-module__root').map(item => `Layover: ${readableText(item)}`)
    return [index === 0 ? 'Outbound' : 'Return', ...lines, ...transfers].join('\n')
  })
  const legs: FlightLeg[] = segments.map((segment, index) => {
    const points = endpoints[index]
    const first = points[0], last = points[points.length - 1]
    const departureDate = index === 0 ? departure : returnDate
    const airports = points.map(point => airport(point)).filter(Boolean)
    // Both sides of an airport change are retained; ordinary connections repeat
    // the same airport at arrival/departure, so collapse adjacent duplicates.
    const route = airports.filter((code, position) => position === 0 || code !== airports[position - 1])
    const stops = route.slice(1, -1)
    if (stops.length > 6) warnings.push('Only the first six connection airports fit on the card; check the full itinerary notes.')
    return {
      origin: airport(first), destination: airport(last),
      originCity: text(one(first, 'FlightItem-module__city')).slice(0, 120),
      destinationCity: text(one(last, 'FlightItem-module__city')).slice(0, 120),
      departureTime: text(one(first, 'FlightItem-module__time')).slice(0, 30),
      arrivalTime: text(one(last, 'FlightItem-module__time')).slice(0, 30),
      departureDate,
      arrivalDate: readDate(text(one(last, 'FlightItem-module__day')), departureDate ? new Date(`${departureDate}T12:00:00`) : now),
      duration: text(one(segment, 'FlightHead-module__time')).replace(/^Travel time:\s*/i, '').slice(0, 80),
      stops: stops.slice(0, 6),
    }
  })
  const fare = readableText(one(modal, 'TicketFare-module__root'))
  if (fare) notes.push(`Fare shown: ${fare}`)
  if (proposal) notes.push(`Displayed offer: ${readableText(one(proposal, 'ProposaCard-module__name'))} ${priceText}`)
  notes.push('Flight numbers and passenger count may need to be added from the provider.')
  const url = new URL(context.url)
  const params = new URLSearchParams()
  for (const key of ['flightSearch', 'origin_airports', 'destination_airports', 'language', 'locale']) {
    const value = url.searchParams.get(key)
    if (value) params.set(key, value)
  }
  // Offer anchors carry the widget's own selected-ticket share URL as a fallback.
  // Read it without following the booking link or touching the clipboard.
  let ticketId = ''
  for (const anchor of modal.querySelectorAll<HTMLAnchorElement>('a[href]')) {
    try {
      const fallback = new URL(anchor.href).searchParams.get('fallback_url')
      if (!fallback) continue
      const shared = new URL(fallback)
      if (shared.origin === url.origin && shared.pathname === url.pathname
        && shared.searchParams.get('flightSearch') === url.searchParams.get('flightSearch')) {
        ticketId = shared.searchParams.get('ticketId') ?? ''
        if (ticketId) break
      }
    } catch { /* A malformed provider link must not prevent capturing the itinerary. */ }
  }
  if (ticketId) params.set('ticketId', ticketId)
  if (currency) params.set('currency', currency)
  const link = url.protocol === 'https:' && params.has('flightSearch') ? `${url.origin}${url.pathname}?${params}` : ''
  if (!ticketId) warnings.push('The link reopens the search; the selected flight could not be identified.')
  const combinedNotes = notes.join('\n\n')
  if (combinedNotes.length > 2000) warnings.push('The itinerary notes were shortened. Review them before saving.')
  return { details: { origin, destination, departure, returnDate, airline: airlines.join(', ').slice(0, 120), flightNumbers: '', price: readPrice(priceText), currency, link: link.length <= 2000 ? link : '', notes: combinedNotes.slice(0, 2000), legs, fareSummary: fare.slice(0, 240) }, warnings, returnExpected: segments.length === 2 }
}

interface CaptureOptions {
  canCapture: () => boolean
  isActive: () => boolean
  onCapture: (capture: CapturedFlight) => void
  onError: (message: string) => void
}

export function installFlightCapture(options: CaptureOptions) {
  let modalRoot: ShadowRoot | null = null
  let stopped = false
  const buttons = new Set<HTMLButtonElement>()
  const observer = new MutationObserver(() => refresh())
  function refresh() {
    if (stopped) return
    for (const button of buttons) if (!button.isConnected) buttons.delete(button)
    const root = document.getElementById('tpwl-modals')?.shadowRoot
    if (!root) return
    if (root !== modalRoot) {
      observer.disconnect()
      modalRoot = root
      observer.observe(root, { subtree: true, childList: true })
    }
    for (const modal of root.querySelectorAll(selector('TicketDetail-module__root'))) {
      let button = modal.querySelector<HTMLButtonElement>('[data-trip-capture]')
      const header = one(modal, 'TicketDetail-module__head')
      if (!header) continue
      if (!button) {
        button = document.createElement('button')
        button.type = 'button'
        button.dataset.tripCapture = ''
        button.style.cssText = 'font:inherit;font-size:14px;font-weight:600;line-height:1.3;padding:10px 14px;border:2px solid #1b4f5a;border-radius:8px;background:#1b4f5a;color:#fff;cursor:pointer;max-width:180px;flex-shrink:0;white-space:normal'
        button.addEventListener('click', event => {
          event.stopPropagation()
          if (!options.canCapture() || !options.isActive()) return
          try {
            const searchRoot = document.getElementById('tpwl-search')?.shadowRoot
            const config = (window as Window & { TPWL_BACKEND_CONFIGURATION?: { defaultCurrency?: string } }).TPWL_BACKEND_CONFIGURATION
            const currency = text(searchRoot?.querySelector('[data-testid="localization-button-currencies"]') ?? null)
              || new URL(window.location.href).searchParams.get('currency') || config?.defaultCurrency || ''
            const capture = captureFlightDetail(modal, { url: window.location.href, currency })
            options.onCapture(capture)
            modal.querySelector<HTMLButtonElement>(selector('TicketDetail-module__close'))?.click()
          } catch (error) {
            // Keep the error beside the capture button while the modal is open.
            let message = header.querySelector<HTMLElement>('[data-trip-capture-error]')
            if (!message) {
              message = document.createElement('p'); message.dataset.tripCaptureError = ''; message.setAttribute('role', 'alert')
              message.style.cssText = 'font-size:14px;line-height:1.4;color:#8c291e;flex-basis:100%'
              header.append(message)
            }
            message.textContent = error instanceof Error ? error.message : 'Could not capture this flight. Please try again.'
            options.onError(message.textContent)
          }
        })
        header.append(button)
        // Wrap the additional action on small screens inside the provider shadow DOM.
        const headerElement = header as HTMLElement
        headerElement.style.flexWrap = 'wrap'
        headerElement.style.gap = '12px'
        buttons.add(button)
      }
      const label = options.canCapture() ? 'Capture this flight' : 'Sign in to capture'
      if (button.textContent !== label) button.textContent = label
      button.disabled = !options.canCapture() || !options.isActive()
    }
  }
  // Shadow-root attachment itself isn't observable from the parent document.
  // Poll only for its presence; mutations inside it trigger immediate updates.
  const timer = window.setInterval(() => {
    if (document.getElementById('tpwl-modals')?.shadowRoot !== modalRoot) refresh()
  }, 500)
  refresh()
  return {
    refresh,
    stop() {
      stopped = true
      window.clearInterval(timer)
      observer.disconnect()
      for (const button of buttons) button.remove()
      buttons.clear()
    },
  }
}
