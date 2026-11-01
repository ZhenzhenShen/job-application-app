import { describe, expect, it } from 'vitest'
import { isApplication } from '../../src/data/trackerApplications.js'

const record = {
  id: 'application-1',
  company: 'Kauri Labs',
  role: 'Developer',
  date: '2028-02-29',
  status: 'Applied',
  notes: '',
}

describe('tracker application dates', () => {
  it('accepts a valid leap day', () => {
    expect(isApplication(record)).toBe(true)
  })

  it('rejects calendar dates that JavaScript would normalise', () => {
    expect(isApplication({ ...record, date: '2026-02-30' })).toBe(false)
    expect(isApplication({ ...record, date: '2027-02-29' })).toBe(false)
    expect(isApplication({ ...record, date: '2026-13-01' })).toBe(false)
  })
})
