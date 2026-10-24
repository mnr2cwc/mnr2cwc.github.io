export interface DeparturePreferences {
  city: string
  departureAirports: string[]
}
export const MAX_DEPARTURE_AIRPORTS = 20

export function normalizeDeparturePreferences(value: DeparturePreferences): DeparturePreferences {
  return { city: value.city.trim(), departureAirports: [...new Set(value.departureAirports.map(code => code.trim().toUpperCase()))] }
}

export function hasDeparturePreferences(value: unknown): value is DeparturePreferences {
  if (!value || typeof value !== 'object') return false
  const data = value as Record<string, unknown>
  return typeof data.city === 'string' && data.city.trim().length > 0 && data.city.length <= 120
    && Array.isArray(data.departureAirports) && data.departureAirports.length > 0
    && data.departureAirports.length <= MAX_DEPARTURE_AIRPORTS
    && data.departureAirports.every(code => typeof code === 'string' && /^[A-Z]{3}$/.test(code))
    && new Set(data.departureAirports).size === data.departureAirports.length
}
