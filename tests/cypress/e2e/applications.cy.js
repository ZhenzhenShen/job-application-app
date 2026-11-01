import { jobApplicationPage } from '../../models/jobApplicationPage.js'

const s = jobApplicationPage.selectors

describe('Fernlight careers site', () => {
  beforeEach(() => cy.visit(jobApplicationPage.route()))

  function fillStepOne() {
    cy.get(s.firstName).type('Mei')
    cy.get(s.lastName).type('Chen')
    cy.get(s.email).type('mei@example.com')
    cy.get(s.phone).type('+64 21 123 4567')
    cy.get(s.location).type('Auckland')
  }

  function fillRequiredFields() {
    fillStepOne()
    cy.get(s.next).click()
    cy.get(s.linkedin).type('https://linkedin.com/in/mei-chen')
    cy.get(s.portfolio).type('https://example.com/portfolio')
    cy.get(s.resume).selectFile(
      {
        contents: Cypress.Buffer.from('%PDF-1.4 test'),
        fileName: 'cv.pdf',
        mimeType: 'application/pdf',
      },
      { force: true },
    )
    cy.get(s.next).click()
    cy.get(s.workAuthorization).select('yes')
    cy.get(s.coverLetter).type(
      'I build accessible Vue interfaces and enjoy working with thoughtful teams.',
    )
    cy.get(s.consent).check()
  }

  it('validates each step before moving on', () => {
    cy.get(s.next).click()
    cy.get(s.firstName).then(($input) =>
      expect($input[0].validity.valueMissing).to.equal(true),
    )
    fillStepOne()
    cy.get(s.next).click()
    cy.get(s.next).click()
    cy.contains('Please upload your CV.').should('be.visible')
    cy.get(s.resume).selectFile(
      {
        contents: Cypress.Buffer.from('resume'),
        fileName: 'resume.txt',
        mimeType: 'text/plain',
      },
      { force: true },
    )
    cy.contains('Please upload a PDF, DOC, or DOCX file.').should('be.visible')
  })

  it('rejects a CV larger than 5 MB and stays on the experience step', () => {
    fillStepOne()
    cy.get(s.next).click()
    cy.get(s.resume).selectFile(
      {
        contents: Cypress.Buffer.alloc(5 * 1024 * 1024 + 1),
        fileName: 'large-cv.pdf',
        mimeType: 'application/pdf',
      },
      { force: true },
    )
    cy.contains('Your CV must be 5 MB or smaller.').should('be.visible')
    cy.get(s.next).click()
    cy.get(s.experienceStep).should('be.visible')
  })

  it('uses Previous and Next arrows and keeps entered details', () => {
    cy.get(s.previous).should('not.exist')
    cy.get(s.next).should('be.visible')
    fillStepOne()
    cy.get(s.next).click()
    cy.get(s.previous).should('be.visible')
    cy.get(s.next).should('be.visible')
    cy.get(s.previous).click()
    cy.get(s.firstName).should('have.value', 'Mei')
    cy.get(s.next).click()
    cy.get(s.resume).selectFile(
      {
        contents: Cypress.Buffer.from('%PDF-1.4 test'),
        fileName: 'cv.pdf',
        mimeType: 'application/pdf',
      },
      { force: true },
    )
    cy.get(s.next).click()
    cy.get(s.next).should('not.exist')
    cy.get(s.previous).should('be.visible')
    cy.get(s.submit).should('be.visible')
  })

  it('shows every entered detail in a single read-only preview', () => {
    fillRequiredFields()
    cy.get(s.submit).click()
    cy.get(s.preview).within(() => {
      cy.contains('Review your application').should('be.visible')
      cy.contains('Your details have not been sent to a company.').should(
        'be.visible',
      )
      cy.contains('Frontend Developer').should('be.visible')
      cy.contains('dt', 'First name').parent().should('contain', 'Mei')
      cy.contains('dt', 'Last name').parent().should('contain', 'Chen')
      cy.contains('dt', 'Email address')
        .parent()
        .should('contain', 'mei@example.com')
      cy.contains('dt', 'Phone number')
        .parent()
        .should('contain', '+64 21 123 4567')
      cy.contains('dt', 'City / region').parent().should('contain', 'Auckland')
      cy.contains('dt', 'LinkedIn profile')
        .parent()
        .should('contain', 'linkedin.com/in/mei-chen')
      cy.contains('dt', 'Portfolio / GitHub')
        .parent()
        .should('contain', 'example.com/portfolio')
      cy.contains('dt', 'CV').parent().should('contain', 'cv.pdf')
      cy.contains('dt', 'Right to work in New Zealand')
        .parent()
        .should('contain', 'Yes')
      cy.contains('dt', 'Cover letter')
        .parent()
        .should('contain', 'I build accessible Vue interfaces')
      cy.contains('dt', 'Recruitment consent')
        .parent()
        .should('contain', 'Confirmed')
      cy.get('input, textarea, select').should('not.exist')
    })
    cy.contains('button', 'Back to application').click()
    cy.get(s.previous).click()
    cy.get(s.previous).click()
    cy.get(s.firstName).should('have.value', 'Mei')
  })

  it('navigates from the home page to a role and its application', () => {
    cy.visit('/')
    cy.contains('Make room for').should('be.visible')
    cy.contains('a', 'Explore open roles').first().click()
    cy.contains('Open roles').should('be.visible')
    cy.contains('a', 'Product Designer').click()
    cy.contains('h1', 'Product Designer').should('be.visible')
    cy.contains('a', 'Apply now').click()
    cy.get(s.role).should('contain', 'Product Designer').should('be.visible')
  })

  it('filters open roles by team and search', () => {
    cy.visit('/#/careers')
    cy.get('select').select('Design')
    cy.contains('a', 'Product Designer').should('be.visible')
    cy.contains('a', 'Frontend Developer').should('not.exist')
    cy.get('input[type=search]').type('no-such-role')
    cy.contains('No matching roles').should('be.visible')
    cy.contains('button', 'Clear filters').click()
    cy.contains('a', 'Frontend Developer').should('be.visible')
  })

  it('opens the personal tracker from the site and saves an application', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.removeItem('job-tracker-applications-v1')
      },
    })
    cy.contains('a', 'My tracker').first().click()
    cy.contains('h1', 'My application tracker').should('be.visible')
    cy.get('[data-cy=stat-total]').should('have.text', '5')
    cy.contains('button', 'Add application').first().click()
    cy.get('input[name=company]').type('Kauri Labs')
    cy.get('input[name=role]').type('Frontend Developer')
    cy.contains('button', 'Save application').click()
    cy.get('[data-cy=stat-total]').should('have.text', '6')
    cy.reload()
    cy.contains('[data-cy=application-row]', 'Kauri Labs').should('be.visible')
  })

  it('keeps navigation and the application usable on a narrow screen', () => {
    cy.viewport(390, 844)
    cy.visit('/')
    cy.get('button[aria-label="Open menu"]').click()
    cy.contains('a', 'My tracker').should('be.visible')
    cy.visit(jobApplicationPage.route())
    cy.get(s.next).should('be.visible')
    cy.document().then((doc) =>
      expect(doc.documentElement.scrollWidth).to.be.at.most(
        doc.documentElement.clientWidth,
      ),
    )
  })
})
