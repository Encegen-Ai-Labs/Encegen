export type Job = {
  slug: string
  title: string
  department: string
  type: string
  location: string
  posted: string
}

export const DEPARTMENTS = ['All Departments', 'Engineering']

export const JOBS: Job[] = [
  {
    slug: '1',
    title: 'AI Research & Automation Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Pune / Remote',
    posted: 'Active',
  },
  {
    slug: '2',
    title: 'Senior Full Stack Developer (React & Node.js)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Pune / Remote',
    posted: 'Active',
  },
]

export const DEPT_COLORS: Record<string, string> = {
  Engineering: '#6553ee',
}
