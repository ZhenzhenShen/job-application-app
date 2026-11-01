# Fernlight Studio — Careers Site

An English-language, multi-page careers site built with Vue 3 and Vite. Fernlight Studio and its roles are fictional examples that can be replaced with a real employer's details.

## Pages

The site includes a home page, searchable open roles, individual role details, an about page, a hiring process page, a role-specific application form, and a personal application tracker at `#/tracker`. Navigation uses URL hashes, so pages can be bookmarked without server-side route configuration. Role content lives in `src/data/jobs.js`.

## Source structure

- `src/components/app/CareersApp.vue` handles route selection.
- `src/components/layout/` contains the shared header and footer.
- `src/components/pages/` contains descriptively named page components. `application/JobApplicationPage.vue` manages form state and navigation, `application/steps/` contains the three form steps, and `application/ApplicationPreview.vue` shows the read-only review.
- `src/composables/useHashRoute.js` handles hash-based navigation; `useApplications.js` handles tracker filtering and browser storage.
- `src/utils/applicationValidation.js` contains application rules used by the form.
- `src/data/` holds job data and tracker sample data.
- `tests/unit/` and `tests/component/` hold the Vitest tests. `tests/cypress/component/` and `tests/cypress/e2e/` hold browser component and end-to-end tests; `tests/models/` holds shared selectors.
- `src/styles/tailwind.css` imports Tailwind; page and tracker styling lives in utility classes on the Vue templates.

## Getting started

```sh
npm install
npm run dev
```

If Windows PowerShell blocks `npm.ps1`, use `npm.cmd` instead.

## Form

The application has three steps: personal details, experience and CV, then work eligibility and cover letter. Previous and Next buttons move between steps while preserving entered details. In demo mode, the final action opens a single read-only preview of all answers and the CV filename. It does not send the application. Required fields are validated before continuing. CVs can be PDF, DOC, or DOCX files up to 5 MB. The page works on desktop and mobile screens.

## Receiving applications

The default is demo mode. Applicants can preview a completed application, but their details are **not sent or saved**. To receive real applications, configure a server endpoint that accepts a `multipart/form-data` POST request:

```sh
# .env.local
VITE_APPLICATION_ENDPOINT=https://your-domain.example/api/applications
```

The endpoint receives the form fields, `position`, and a file named `resume`. The page displays “Application submitted” only after a 2xx response. Before launch, replace the sample company, role, work arrangement, and privacy wording with accurate details. The endpoint also needs file handling and appropriate privacy and abuse protections.

## Verification

```sh
npm run format:check
npm run build
npm run test:unit
npm run test:component
npm run test:e2e
```

Run `npm run format` to format the Vue components, JavaScript, Tailwind entry file, and project documentation. Prettier also sorts Tailwind classes.

`npm test` runs all Vitest unit and mounted component tests. `npm run test:component` runs both the Vitest and Cypress component suites; `npm run test:component:cypress` runs only the browser component suite. Cypress end-to-end tests use the shared selectors in `tests/models/jobApplicationPage.js`. Start the app with `npm run dev -- --port 5173 --strictPort` before running `npm run test:e2e`. Cypress component tests start their own Vite server.
