import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../../components/icons'
import { ClosingCTA } from '../../components/kit'
import { DEPARTMENTS, DEPT_COLORS, JOBS as DEFAULT_JOBS } from '../../data/jobs'
import { API_BASE_URL } from '../../config/api'
import './careers.css'

export default function Careers() {
  const [dept, setDept] = useState('All Departments')
  const [query, setQuery] = useState('')
  const [jobsList, setJobsList] = useState(DEFAULT_JOBS)

  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Map backend jobs format to UI format
          const formatted = data.map((j) => ({
            title: j.title,
            slug: j.id.toString(),
            department: j.department || 'Engineering',
            type: j.employment_type || 'Full-time',
            location: j.location || 'Remote',
            posted: j.status === 'active' ? 'Active' : 'Closed',
            description: j.description
          }))
          setJobsList(formatted)
        }
      })
      .catch((err) => console.warn('Could not fetch backend jobs, using fallback list:', err))
  }, [])

  const filtered = useMemo(() => {
    return jobsList.filter(
      (j) =>
        (dept === 'All Departments' || j.department === dept) &&
        j.title.toLowerCase().includes(query.toLowerCase()),
    )
  }, [dept, query, jobsList])

  const groups = useMemo(() => {
    const map = new Map<string, typeof jobsList>()
    for (const job of filtered) {
      const list = map.get(job.department) ?? []
      list.push(job)
      map.set(job.department, list)
    }
    return [...map.entries()]
  }, [filtered])

  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <span className="careers-hero__badge">Open Roles</span>
          <h1>
            Find your place at <span className="accent">Encegen</span>.
          </h1>
          <p>
            Join a team building the future of autonomous AI — we're hiring across engineering,
            research, product, and more.
          </p>
          <div className="careers-hero__search">
            <SearchIcon size={18} />
            <input
              placeholder="Search roles, teams, or keywords…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="careers-hero__meta">
            <span>🌐 Global team</span>
            <span>· {jobsList.length} open roles</span>
            <span>· Fully remote-friendly</span>
          </div>
        </div>
      </section>

      <section className="section section--lavender" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="job-filters">
            {DEPARTMENTS.map((d) => (
              <button key={d} className={d === dept ? 'active' : ''} onClick={() => setDept(d)}>
                {d}
              </button>
            ))}
          </div>
          <div className="job-filters__meta">
            <span>
              {filtered.length} open positions across {groups.length} departments
            </span>
            <a href="#" onClick={(e) => { e.preventDefault(); setDept('All Departments'); setQuery('') }}>
              View all
            </a>
          </div>

          {groups.map(([department, jobs]) => (
            <div
              key={department}
              className="job-group"
              style={{ ['--group-color' as string]: DEPT_COLORS[department] }}
            >
              <div className="job-group__head">
                <h2>{department}</h2>
                <span>
                  {jobs.length} role{jobs.length > 1 ? 's' : ''}
                </span>
              </div>
              {jobs.map((job) => (
                <div key={job.slug} className="job-row">
                  <div className="job-row__info">
                    <h3>{job.title}</h3>
                    <div className="job-row__chips">
                      <span>{job.department}</span>
                      <span>{job.type}</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <span className="job-row__loc">📍 {job.location}</span>
                  <Link to={`/careers/${job.slug}`} className="job-row__apply">
                    Apply →
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA (Exact match to screenshot) */}
      <ClosingCTA
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Pramay Agro', 'Fx Algo']}
        trustedLabel="trusted by 5,000+ enterprises"
        line1="This is where the story gets interesting."
        line2="And you could be in the next chapter."
        sub="We're not just hiring. We're building a team of people who give a damn about making AI work for the real world."
        primary={{ label: 'View All Open Roles', to: '#', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), variant: 'lavender' }}
       
        checks={['< 48hr response', 'Every CV read by humans', 'Transparent hiring process']}
      />
    </>
  )
}
