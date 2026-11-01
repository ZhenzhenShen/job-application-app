export const statuses = ['Applied', 'Interview', 'Offer', 'Rejected']
export const storageKey = 'job-tracker-applications-v1'
export const sampleApplications = [
  {
    id: 'demo-1',
    company: 'Fernlight Studio',
    role: 'Frontend Developer',
    date: '2026-10-28',
    status: 'Interview',
    notes: 'Prepare Vue component examples',
  },
  {
    id: 'demo-2',
    company: 'Orbit & Oak',
    role: 'Junior Vue Developer',
    date: '2026-10-26',
    status: 'Applied',
    notes: '',
  },
  {
    id: 'demo-3',
    company: 'Cloudberry Labs',
    role: 'Software Engineer',
    date: '2026-10-23',
    status: 'Offer',
    notes: 'Review the sample offer',
  },
  {
    id: 'demo-4',
    company: 'Pebbleworks',
    role: 'UI Developer',
    date: '2026-10-20',
    status: 'Rejected',
    notes: '',
  },
  {
    id: 'demo-5',
    company: 'Northstar Grove',
    role: 'Web Developer',
    date: '2026-10-19',
    status: 'Applied',
    notes: '',
  },
]

export function isApplication(item) {
  const date = item?.date
  const parsedDate =
    typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? new Date(`${date}T00:00:00Z`)
      : null
  const validDate =
    parsedDate !== null &&
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === date
  return (
    item &&
    typeof item.id === 'string' &&
    item.id.length > 0 &&
    typeof item.company === 'string' &&
    item.company.trim().length > 0 &&
    typeof item.role === 'string' &&
    item.role.trim().length > 0 &&
    validDate &&
    statuses.includes(item.status) &&
    typeof item.notes === 'string'
  )
}
