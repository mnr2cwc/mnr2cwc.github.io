export interface Airport { code: string; name: string; city: string; country: string }
let catalog: Promise<Airport[]> | undefined
export function loadAirports(): Promise<Airport[]> {
  if (!catalog) catalog = fetch(`${import.meta.env.BASE_URL}data/airports.json`)
    .then(async response => {
      if (!response.ok) throw new Error('Airport list unavailable')
      return await response.json() as Airport[]
    }).catch(error => { catalog = undefined; throw error })
  return catalog
}
const normalized = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
export function searchAirports(airports: Airport[], query: string, selected: string[]): Airport[] {
  const term = normalized(query.trim())
  if (term.length < 2) return []
  return airports.filter(airport => !selected.includes(airport.code) && normalized(`${airport.code} ${airport.city} ${airport.name} ${airport.country}`).includes(term))
    .sort((a, b) => Number(b.code.toLowerCase() === term) - Number(a.code.toLowerCase() === term) || a.city.localeCompare(b.city) || a.code.localeCompare(b.code)).slice(0, 12)
}
