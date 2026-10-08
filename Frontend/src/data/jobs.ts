export type Job = {
  slug: string
  title: string
  department: string
  type: string
  location: string
  posted: string
}

export const DEPT_COLORS: Record<string, string> = {
  Engineering: '#6553ee',
}
