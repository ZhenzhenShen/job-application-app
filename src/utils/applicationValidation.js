const allowedResumeTypes = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}
const maxResumeSize = 5 * 1024 * 1024

export function getResumeError(file) {
  if (!file) return 'Please upload your CV.'
  const extension = file.name.split('.').pop()?.toLowerCase()
  if (
    !Object.hasOwn(allowedResumeTypes, extension) ||
    (file.type && file.type !== allowedResumeTypes[extension])
  ) {
    return 'Please upload a PDF, DOC, or DOCX file.'
  }
  if (file.size > maxResumeSize) return 'Your CV must be 5 MB or smaller.'
  return ''
}

export function getPersonalDetailsError(form) {
  if (
    ![form.firstName, form.lastName, form.phone, form.location].every((value) =>
      value.trim(),
    )
  ) {
    return 'Please complete all required details before continuing.'
  }
  return ''
}

export function getFinalDetailsError(form) {
  if (
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    form.coverLetter.trim().length < 30
  ) {
    return 'Please enter your name and write at least 30 characters about your application.'
  }
  return ''
}
