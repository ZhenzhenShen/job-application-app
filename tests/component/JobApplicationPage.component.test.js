// @vitest-environment jsdom
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { jobs } from '../../src/data/jobs.js'
import { jobApplicationPage } from '../models/jobApplicationPage.js'
import JobApplicationPage from '../../src/components/pages/application/JobApplicationPage.vue'

const selectors = jobApplicationPage.selectors

function mountPage() {
  return mount(JobApplicationPage, { props: { job: jobs[0] } })
}

async function fillPersonalDetails(wrapper) {
  await wrapper.find(selectors.firstName).setValue('Mei')
  await wrapper.find(selectors.lastName).setValue('Chen')
  await wrapper.find(selectors.email).setValue('mei@example.com')
  await wrapper.find(selectors.phone).setValue('+64 21 123 4567')
  await wrapper.find(selectors.location).setValue('Auckland')
}

async function fillApplication(wrapper) {
  await fillPersonalDetails(wrapper)
  await wrapper.find(selectors.next).trigger('click')
  const resumeInput = wrapper.find(selectors.resume)
  Object.defineProperty(resumeInput.element, 'files', {
    configurable: true,
    value: [new File(['%PDF-1.4'], 'cv.pdf', { type: 'application/pdf' })],
  })
  await resumeInput.trigger('change')
  await wrapper.find(selectors.next).trigger('click')
  await wrapper.find(selectors.workAuthorization).setValue('yes')
  await wrapper
    .find(selectors.coverLetter)
    .setValue('I build accessible Vue interfaces and enjoy working with teams.')
  await wrapper.find(selectors.consent).setValue(true)
}

afterEach(() => vi.unstubAllGlobals())

describe('JobApplicationPage', () => {
  it('shows the selected role and preserves answers between step components', async () => {
    const wrapper = mountPage()
    expect(wrapper.find(selectors.role).text()).toBe(jobs[0].title)
    expect(wrapper.find(selectors.personalStep).exists()).toBe(true)
    expect(wrapper.find(selectors.previous).exists()).toBe(false)

    await fillPersonalDetails(wrapper)
    await wrapper.find(selectors.next).trigger('click')
    expect(wrapper.find(selectors.experienceStep).exists()).toBe(true)
    expect(wrapper.find(selectors.personalStep).exists()).toBe(false)

    await wrapper.find(selectors.previous).trigger('click')
    expect(wrapper.find(selectors.firstName).element.value).toBe('Mei')
    expect(wrapper.find(selectors.email).element.value).toBe('mei@example.com')
  })

  it('keeps an invalid CV out of the application state', async () => {
    const wrapper = mountPage()
    await fillPersonalDetails(wrapper)
    await wrapper.find(selectors.next).trigger('click')

    const resumeInput = wrapper.find(selectors.resume)
    Object.defineProperty(resumeInput.element, 'files', {
      configurable: true,
      value: [new File(['resume'], 'resume.txt', { type: 'text/plain' })],
    })
    await resumeInput.trigger('change')
    expect(wrapper.text()).toContain('Please upload a PDF, DOC, or DOCX file.')

    await wrapper.find(selectors.next).trigger('click')
    expect(wrapper.find(selectors.experienceStep).exists()).toBe(true)
  })

  it('submits the expected multipart fields and shows success after a 2xx response', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)
    vi.stubGlobal('scrollTo', vi.fn())
    const wrapper = mount(JobApplicationPage, {
      props: { job: jobs[0], endpoint: '/api/applications' },
    })
    await fillApplication(wrapper)

    await wrapper.find(selectors.form).trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, options] = fetchMock.mock.calls[0]
    expect(url).toBe('/api/applications')
    expect(options.method).toBe('POST')
    expect(options.body).toBeInstanceOf(FormData)
    expect(options.body.get('position')).toBe(jobs[0].title)
    expect(options.body.get('firstName')).toBe('Mei')
    expect(options.body.get('email')).toBe('mei@example.com')
    expect(options.body.get('workAuthorization')).toBe('yes')
    expect(options.body.get('consent')).toBe('true')
    expect(options.body.get('resume').name).toBe('cv.pdf')
    expect(wrapper.text()).toContain('Application submitted')
  })

  it('keeps the form and its answers available when the endpoint rejects the submission', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, status: 500 })
    vi.stubGlobal('fetch', fetchMock)
    const wrapper = mount(JobApplicationPage, {
      props: { job: jobs[0], endpoint: '/api/applications' },
    })
    await fillApplication(wrapper)

    await wrapper.find(selectors.form).trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledOnce()
    expect(wrapper.text()).toContain('We could not submit your application.')
    expect(wrapper.find(selectors.coverLetter).element.value).toContain(
      'I build accessible Vue interfaces',
    )
    expect(
      wrapper.find(selectors.submit).attributes('disabled'),
    ).toBeUndefined()
  })
})
