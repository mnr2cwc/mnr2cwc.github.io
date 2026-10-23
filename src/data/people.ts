export type AttendanceStatus = 'invited' | 'commited' | 'interest'

export interface Person {
  name: string
  status: AttendanceStatus
}

// This list is bundled with the site and does not use a database.
export const people: Person[] = [
  { name: 'Michael', status: 'commited' },
  { name: 'John', status: 'commited' },
  { name: 'Braden', status: 'commited' },
  { name: 'Libby', status: 'interest' },
  { name: 'Matt', status: 'interest' },
  { name: 'Claire', status: 'interest' },
  { name: 'Garrett', status: 'invited' },
  { name: 'Dylan', status: 'invited' },
  { name: 'Ross', status: 'invited' },
  { name: 'Amber', status: 'invited' },
]
