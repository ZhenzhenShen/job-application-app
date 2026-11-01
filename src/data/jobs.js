export const jobs = [
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    team: 'Engineering',
    location: 'Auckland / Remote-friendly',
    type: 'Full-time',
    summary:
      'Build clear, accessible interfaces that make complex work feel simple.',
    responsibilities: [
      'Build and maintain responsive Vue interfaces.',
      'Work with designers to turn ideas into usable features.',
      'Improve accessibility, performance, and code quality.',
      'Share feedback in reviews and support teammates.',
    ],
    requirements: [
      'Experience building production interfaces with JavaScript and a modern framework.',
      'A practical understanding of semantic HTML and accessible design.',
      'Comfort working with APIs, Git, and automated tests.',
      'Clear communication and curiosity about how people use software.',
    ],
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    team: 'Design',
    location: 'Wellington / Hybrid',
    type: 'Full-time',
    summary:
      'Shape thoughtful product experiences from early research to polished delivery.',
    responsibilities: [
      'Explore customer problems through research and prototypes.',
      'Design flows, interfaces, and reusable patterns.',
      'Partner with engineers and product leads throughout delivery.',
      'Explain design decisions and learn from feedback.',
    ],
    requirements: [
      'Experience designing digital products across web or mobile.',
      'A portfolio showing your process and outcomes.',
      'Confidence with prototyping and design systems.',
      'An inclusive approach to research and collaboration.',
    ],
  },
  {
    slug: 'customer-success-specialist',
    title: 'Customer Success Specialist',
    team: 'Customer Experience',
    location: 'Christchurch / Hybrid',
    type: 'Full-time',
    summary: 'Help customers get lasting value from the tools we build.',
    responsibilities: [
      'Guide new customers through onboarding.',
      'Respond to questions with empathy and clear next steps.',
      'Spot recurring issues and share insights with the product team.',
      'Create useful help content and improve support processes.',
    ],
    requirements: [
      'Experience in customer support, success, or a related role.',
      'Strong written and verbal communication.',
      'Confidence learning new software and explaining it simply.',
      'A patient, organised approach to problem solving.',
    ],
  },
]

export function getJob(slug) {
  return jobs.find((job) => job.slug === slug)
}
