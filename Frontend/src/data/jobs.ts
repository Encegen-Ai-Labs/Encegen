export type Job = {
  slug: string
  title: string
  department: string
  type: string
  location: string
  posted: string
}

export const DEPARTMENTS = ['All Departments', 'Engineering', 'AI & Research', 'Product', 'Sales', 'Operations', 'Design']

export const JOBS: Job[] = [
  { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', department: 'AI & Research', type: 'Full-time', location: 'Remote', posted: 'Posted 2 days ago' },
  { slug: 'ai-research-scientist', title: 'AI Research Scientist', department: 'AI & Research', type: 'Full-time', location: 'Remote', posted: 'Posted 11 days ago' },
  { slug: 'ml-platform-engineer', title: 'ML Platform Engineer', department: 'AI & Research', type: 'Full-time', location: 'Remote', posted: 'Posted 3 days ago' },
  { slug: 'nlp-research-lead', title: 'NLP Research Lead', department: 'AI & Research', type: 'Full-time', location: 'Remote', posted: 'Posted 5 days ago' },
  { slug: 'solutions-architect', title: 'Solutions Architect', department: 'Engineering', type: 'Full-time', location: 'Singapore / Remote', posted: 'Posted 7 days ago' },
  { slug: 'backend-engineer-infra', title: 'Backend Engineer (Infra)', department: 'Engineering', type: 'Full-time', location: 'Remote', posted: 'Posted 4 days ago' },
  { slug: 'frontend-engineer', title: 'Frontend Engineer', department: 'Engineering', type: 'Full-time', location: 'Remote', posted: 'Posted 6 days ago' },
  { slug: 'senior-product-manager', title: 'Senior Product Manager', department: 'Product', type: 'Full-time', location: 'London / Remote', posted: 'Posted 1 day ago' },
  { slug: 'product-designer', title: 'Product Designer', department: 'Product', type: 'Full-time', location: 'Remote', posted: 'Posted 8 days ago' },
  { slug: 'enterprise-account-executive', title: 'Enterprise Account Executive', department: 'Sales', type: 'Full-time', location: 'New York', posted: 'Posted 5 days ago' },
  { slug: 'growth-marketing-lead', title: 'Growth Marketing Lead', department: 'Sales', type: 'Full-time', location: 'Remote', posted: 'Posted 5 days ago' },
  { slug: 'head-of-people-operations', title: 'Head of People Operations', department: 'Operations', type: 'Full-time', location: 'Berlin / Remote', posted: 'Posted 3 days ago' },
  { slug: 'legal-compliance-manager', title: 'Legal & Compliance Manager', department: 'Operations', type: 'Full-time', location: 'London', posted: 'Posted 9 days ago' },
  { slug: 'brand-designer', title: 'Brand Designer', department: 'Design', type: 'Full-time', location: 'Remote', posted: 'Posted 2 days ago' },
]

export const DEPT_COLORS: Record<string, string> = {
  'AI & Research': '#6553ee',
  Engineering: '#22d3ee',
  Product: '#22c55e',
  Sales: '#f59e0b',
  Operations: '#3b82f6',
  Design: '#ec4899',
}
