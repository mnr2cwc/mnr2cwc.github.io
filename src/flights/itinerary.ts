export interface FlightLeg {
  origin: string
  destination: string
  originCity: string
  destinationCity: string
  departureTime: string
  arrivalTime: string
  departureDate: string
  arrivalDate: string
  duration: string
  stops: string[]
}

const fields = ['origin', 'destination', 'originCity', 'destinationCity', 'departureTime', 'arrivalTime', 'departureDate', 'arrivalDate', 'duration', 'stops']
const boundedString = (value: unknown, max: number): value is string => typeof value === 'string' && value.length <= max
const airport = (value: unknown) => typeof value === 'string' && /^(?:[A-Z]{3})?$/.test(value)
const date = (value: unknown) => typeof value === 'string' && /^(?:\d{4}-\d{2}-\d{2})?$/.test(value)

export function validLeg(value: unknown): value is FlightLeg {
  if (!value || typeof value !== 'object') return false
  const leg = value as Record<string, unknown>
  return Object.keys(leg).length === fields.length && fields.every(field => field in leg)
    && airport(leg.origin) && airport(leg.destination)
    && boundedString(leg.originCity, 120) && boundedString(leg.destinationCity, 120)
    && boundedString(leg.departureTime, 30) && boundedString(leg.arrivalTime, 30)
    && date(leg.departureDate) && date(leg.arrivalDate) && boundedString(leg.duration, 80)
    && Array.isArray(leg.stops) && leg.stops.length <= 6
    && leg.stops.every(stop => typeof stop === 'string' && /^[A-Z]{3}$/.test(stop))
}

export function validLegs(value: unknown): value is FlightLeg[] {
  return Array.isArray(value) && value.length <= 2 && value.every(validLeg)
}

// Historical/manual entries have no captured timing data. Render the route and
// dates already on record, keeping missing times and stop counts unspecified.
export function displayLegs(flight: { origin: string; destination: string; departure: string; returnDate: string; legs?: FlightLeg[] }): FlightLeg[] {
  if (validLegs(flight.legs) && flight.legs.length) return flight.legs
  const empty = { originCity: '', destinationCity: '', departureTime: '', arrivalTime: '', arrivalDate: '', duration: '', stops: [] }
  const outbound = { ...empty, origin: flight.origin, destination: flight.destination, departureDate: flight.departure }
  return flight.returnDate
    ? [outbound, { ...empty, origin: flight.destination, destination: flight.origin, departureDate: flight.returnDate }]
    : [outbound]
}
