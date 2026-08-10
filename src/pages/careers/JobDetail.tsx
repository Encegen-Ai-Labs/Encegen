import { Link, useParams } from 'react-router-dom'
import { JOBS } from '../../data/jobs'
import './careers.css'

const WHAT_YOULL_DO = [
  'Design and train large language models (LLMs) specialized for autonomous tool-use and code generation.',
  'Lead AI research initiatives focused on multi-agent collaboration and long-term memory systems.',
  'Collaborate with product teams to integrate cutting-edge models into seamless user experiences.',
  'Optimize model inference pipelines for low-latency, high-throughput production environments.',
  'Publish original research and represent Encegen at top-tier AI conferences (NeurIPS, ICML, CVPR).',
  'Mentor junior and mid-level engineers to foster a culture of technical excellence.',
  'Define AI evaluation frameworks to measure model performance, safety, and alignment.',
]

const LOOKING_FOR = [
  '5+ years of experience in Machine Learning or AI engineering in a high-growth production environment.',
  'PhD or strong research background in Computer Science, Mathematics, or a related quantitative field.',
  'Deep expertise with PyTorch or JAX and experience training models on distributed GPU clusters.',
  'Proven track record of shipping transformer-based architectures or diffusion models at scale.',
  'Strong publication record or significant open-source contributions to the ML community.',
  'Experience with distributed training frameworks like DeepSpeed, Megatron-LM, or FSDP.',
]

const OFFERS = [
  { icon: '💰', title: 'Competitive Salary', items: ['$220K–$280K base salary', 'Based on experience & research track record', 'Annual performance reviews with raises'] },
  { icon: '📈', title: 'Equity Package', items: ['Generous seed-stage equity grants', 'Standard 4-year vesting schedule', '1-year cliff, monthly thereafter'] },
  { icon: '🌍', title: 'Remote-First', items: ['Work from anywhere in the world', 'Hubs in San Francisco, NYC & London', 'Home office setup stipend included'] },
  { icon: '🏥', title: 'Health & Wellness', items: ['Premium medical, dental & vision', 'Coverage for you and dependents', 'Mental health & wellness programs'] },
  { icon: '📚', title: 'Learning Budget', items: ['$5,000 annual learning stipend', 'Conferences, courses & books', 'Paid time off for certifications'] },
  { icon: '🏖', title: '25 Days PTO', items: ['25 days paid time off', 'Flexible scheduling', 'Company-wide recharge weeks'] },
]

export default function JobDetail() {
  const { slug } = useParams()
  const job = JOBS.find((j) => j.slug === slug) ?? JOBS[0]

  return (
    <>
      <section className="jd-hero">
        <div className="container">
          <span className="jd-hero__badge">● {job.department} · Job Opening</span>
          <p className="jd-hero__crumbs">
            <Link to="/careers">Careers</Link> → <Link to="/careers">All Open Roles</Link> →{' '}
            {job.title}
          </p>
          <div className="jd-hero__row">
            <div>
              <h1>{job.title}</h1>
              <div className="jd-hero__meta">
                <span className="dept">{job.department}</span>
                <span>· {job.type}</span>
                <span>· {job.location}</span>
                <span>· {job.posted}</span>
              </div>
            </div>
            <div className="jd-hero__actions">
              <a href="#" className="kbtn kbtn--outline-light">
                Save Role
              </a>
              <a href="#apply" className="kbtn kbtn--white">
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container jd-body">
          <div className="jd-content">
            <h2>About the Role</h2>
            <p>
              Encegen is building the operating system for autonomous AI agents. As a {job.title},
              you will join our foundational Research &amp; Engineering team to design, train, and
              deploy large-scale models that power the next generation of generative interfaces.
            </p>
            <p>
              You won't just be calling APIs; you'll be building the underlying architecture. This
              role requires a blend of deep mathematical understanding and the ability to scale
              inference pipelines to millions of users. You will lead technical decisions on model
              selection, fine-tuning strategies, and RAG architectures.
            </p>

            <h2>What You'll Do</h2>
            <ul>
              {WHAT_YOULL_DO.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            <h2>What We're Looking For</h2>
            <ul>
              {LOOKING_FOR.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>

            <div className="jd-offer">
              <h2>What We Offer</h2>
              <div className="jd-offer__grid">
                {OFFERS.map((o) => (
                  <div key={o.title} className="jd-offer__group">
                    <strong>
                      <span>{o.icon}</span> {o.title}
                    </strong>
                    <ul>
                      {o.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="apply-card" id="apply">
            <h3>Apply for this role</h3>
            <p>Join Encegen and help build the future of AI.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="apply-field">
                <label>
                  Full Name <em>*</em>
                </label>
                <input placeholder="Enter your full name" required />
              </div>
              <div className="apply-field">
                <label>
                  Email Address <em>*</em>
                </label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className="apply-field">
                <label>Phone Number</label>
                <input placeholder="+1 (555) 000-0000" />
              </div>
              <div className="apply-field">
                <label>LinkedIn Profile</label>
                <input placeholder="linkedin.com/in/username" />
              </div>
              <div className="apply-field">
                <label>Current Location</label>
                <input placeholder="e.g. San Francisco, CA" />
              </div>
              <div className="apply-field">
                <label>
                  Resume / CV <em>*</em>
                </label>
                <div className="apply-drop">
                  <span style={{ fontSize: 20 }}>⬆</span>
                  <strong>Drag &amp; drop or click to upload</strong>
                  <span>PDF, DOC up to 10MB</span>
                </div>
              </div>
              <div className="apply-field">
                <label>Cover Letter</label>
                <textarea placeholder="Briefly describe why you're a good fit…" />
              </div>
              <div className="apply-field">
                <label>How did you hear about us?</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Job board</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="apply-submit">
                Submit Application →
              </button>
            </form>
            <p className="apply-card__legal">
              By applying, you agree to our <a href="#">Privacy Policy</a> and{' '}
              <a href="#">Terms of Service</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
