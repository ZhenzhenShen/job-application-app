import { describe, expect, it } from 'vitest'
import {
  getFinalDetailsError,
  getPersonalDetailsError,
  getResumeError,
} from '../../src/utils/applicationValidation.js'

describe('application validation', () => {
  it('requires a CV and accepts supported formats at the size limit', () => {
    expect(getResumeError(null)).toBe('Please upload your CV.')
    for (const [name, type] of [
      ['cv.pdf', 'application/pdf'],
      ['cv.doc', 'application/msword'],
      [
        'cv.docx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ],
    ]) {
      expect(getResumeError({ name, type, size: 5 * 1024 * 1024 })).toBe('')
    }
  })

  it('rejects unsupported and oversized CV files', () => {
    expect(
      getResumeError({ name: 'cv.txt', type: 'text/plain', size: 100 }),
    ).toBe('Please upload a PDF, DOC, or DOCX file.')
    expect(
      getResumeError({
        name: 'cv.pdf',
        type: 'application/pdf',
        size: 5 * 1024 * 1024 + 1,
      }),
    ).toBe('Your CV must be 5 MB or smaller.')
  })

  it('rejects mismatched extensions and MIME types while allowing an unknown MIME type', () => {
    expect(
      getResumeError({ name: 'cv.exe', type: 'application/pdf', size: 100 }),
    ).toBe('Please upload a PDF, DOC, or DOCX file.')
    expect(
      getResumeError({
        name: 'cv.pdf',
        type: 'application/x-msdownload',
        size: 100,
      }),
    ).toBe('Please upload a PDF, DOC, or DOCX file.')
    expect(getResumeError({ name: 'cv.PDF', type: '', size: 100 })).toBe('')
  })

  it('rejects whitespace-only required personal details', () => {
    const form = {
      firstName: 'Mei',
      lastName: 'Chen',
      phone: '+64 21 123 4567',
      location: 'Auckland',
    }
    expect(getPersonalDetailsError(form)).toBe('')
    expect(getPersonalDetailsError({ ...form, location: '   ' })).toBe(
      'Please complete all required details before continuing.',
    )
  })

  it('requires 30 non-whitespace cover-letter characters', () => {
    const form = {
      firstName: 'Mei',
      lastName: 'Chen',
      coverLetter: 'x'.repeat(30),
    }
    expect(getFinalDetailsError(form)).toBe('')
    expect(
      getFinalDetailsError({ ...form, coverLetter: `  ${'x'.repeat(29)}  ` }),
    ).toContain('at least 30 characters')
    expect(getFinalDetailsError({ ...form, firstName: '  ' })).toContain(
      'Please enter your name',
    )
  })
})
