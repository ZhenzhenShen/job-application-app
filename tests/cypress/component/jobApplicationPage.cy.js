import { mount } from 'cypress/vue'
import { jobs } from '../../../src/data/jobs.js'
import JobApplicationPage from '../../../src/components/pages/application/JobApplicationPage.vue'
import ApplicationPreview from '../../../src/components/pages/application/ApplicationPreview.vue'
import { jobApplicationPage } from '../../models/jobApplicationPage.js'
import '../../../src/styles/tailwind.css'

const s = jobApplicationPage.selectors

describe('job application components', () => {
  it('renders the selected role and preserves details between steps', () => {
    mount(JobApplicationPage, { props: { job: jobs[0] } })

    cy.get(s.role).should('contain', jobs[0].title)
    cy.get(s.personalStep).should('be.visible')
    cy.get(s.previous).should('not.exist')
    cy.get(s.next).click()
    cy.get(s.firstName).then(($input) =>
      expect($input[0].validity.valueMissing).to.equal(true),
    )

    cy.get(s.firstName).type('Mei')
    cy.get(s.lastName).type('Chen')
    cy.get(s.email).type('mei@example.com')
    cy.get(s.phone).type('+64 21 123 4567')
    cy.get(s.location).type('Auckland')
    cy.get(s.next).click()
    cy.get(s.experienceStep).should('be.visible')
    cy.get(s.previous).click()
    cy.get(s.firstName).should('have.value', 'Mei')
  })

  it('renders the preview read only and emits edit', () => {
    const onEdit = cy.stub().as('edit')
    mount(ApplicationPreview, {
      props: {
        job: jobs[0],
        form: {
          firstName: 'Mei',
          lastName: 'Chen',
          email: 'mei@example.com',
          phone: '+64 21 123 4567',
          location: 'Auckland',
          linkedin: '',
          portfolio: '',
          workAuthorization: 'yes',
          coverLetter: 'I enjoy building useful Vue applications.',
          consent: true,
        },
        resume: { name: 'cv.pdf' },
        onEdit,
      },
    })

    cy.get(s.preview).should('contain', 'Mei')
    cy.get(s.preview).should('contain', 'cv.pdf')
    cy.get(s.preview).find('input, select, textarea').should('not.exist')
    cy.contains('button', 'Back to application').click()
    cy.get('@edit').should('have.been.calledOnce')
  })
})
