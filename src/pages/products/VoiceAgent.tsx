import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import './products.css'

const STAT_TILES = [
  { value: '24/7', desc: 'always-on conversational support' },
  { value: '< 1s', desc: 'response time for user inquiries' },
  { value: '50+', desc: 'languages supported natively' },
  { value: '80%', desc: 'reduction in support resolution times' },
]

const HOW = [
  {
    num: '01',
    title: 'Listen',
    desc: 'The Voice Agent captures spoken language with high-fidelity speech recognition, understanding context and intent instantly.',
  },
  {
    num: '02',
    title: 'Process',
    desc: 'Advanced NLP processes the query, retrieving knowledge from your business data to formulate an accurate response.',
  },
  {
    num: '03',
    title: 'Speak',
    desc: 'A natural, human-like voice delivers the response in real-time, creating a seamless conversational experience.',
  },
]

const PLATFORM = [
  { icon: '🎙️', title: 'Natural Speech', desc: 'Ultra-realistic voices that sound human, with emotional nuance and correct pacing.' },
  { icon: '🌍', title: 'Multilingual', desc: 'Instantly understand and converse in dozens of global languages.' },
  { icon: '🧠', title: 'Context Aware', desc: 'Maintains conversation history to handle complex, multi-turn interactions gracefully.' },
  { icon: '🔌', title: 'API Driven', desc: 'Easily integrate the voice agent into your app, phone system, or website.' },
  { icon: '📊', title: 'Conversation Analytics', desc: 'Review transcripts and analyze sentiment to improve user experience.' },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'End-to-end encryption for all voice interactions and data processing.' },
]

const TESTIMONIALS = [
  {
    color: '#ec4899',
    quote: "Our customer satisfaction scores skyrocketed after deploying the Voice Agent for tier 1 support.",
    initials: 'RJ',
    name: 'Rebecca Jones',
    role: 'VP Customer Success',
    hue: 330,
  },
  {
    color: '#06b6d4',
    quote: 'The latency is so low, users often forget they are talking to an AI. It is a remarkable piece of technology.',
    initials: 'TK',
    name: 'Thomas King',
    role: 'CTO, CommTech',
    hue: 190,
  },
  {
    color: '#84cc16',
    quote: 'It handles multi-lingual queries perfectly without skipping a beat.',
    initials: 'MS',
    name: 'Mina Silva',
    role: 'Global Support Lead',
    hue: 85,
  },
  {
    color: '#f97316',
    quote: 'Being able to plug this right into our existing PBX saved us months of development.',
    initials: 'DP',
    name: 'Daniel Park',
    role: 'Systems Architect',
    hue: 25,
  },
]

export default function VoiceAgent() {
  return (
    <>
      <PageHero
        badge="Next-Generation Conversational AI"
        title={
          <>
            Conversations that
            <br />
            sound human.
          </>
        }
        sub="Deploy intelligent voice agents that understand context, speak naturally, and resolve queries instantly across any channel."
        actions={
          <>
            <Btn to="#how-it-works" variant="white">How it works</Btn>
            <Btn to="#features" variant="outline-light">Explore Tech</Btn>
          </>
        }
      >
        <div className="voice-console">
          <div className="voice-orb"></div>
          <div className="voice-waveform">
            <div className="voice-bar"></div>
            <div className="voice-bar"></div>
            <div className="voice-bar"></div>
            <div className="voice-bar"></div>
            <div className="voice-bar"></div>
          </div>
          <div className="voice-transcript">
            <div className="voice-msg user">User: "I need to reset my password for my account."</div>
            <div className="voice-msg agent">Agent: "I can help with that. Are you currently at your computer?"</div>
          </div>
        </div>
      </PageHero>

      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 01</p>
            <h2 className="left-title">Beyond robotic interactions.</h2>
            <p className="left-copy">
              Static phone trees and robotic voices are frustrating. Give your customers the fluid, natural conversational experience they expect with our advanced Voice Agent.
            </p>
          </div>
          <div className="stat-tiles">
            {STAT_TILES.map((s) => (
              <div key={s.value} className="stat-tile">
                <strong>{s.value}</strong>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradBand tone="purple" quote="The future of interaction is voice. Speak your customers' language." />

      <section id="how-it-works" className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Interaction Flow" title="How the Agent Converses" />
          <div className="cards-3">
            {HOW.map((h) => (
              <article key={h.num} className="numcard">
                <span className="numcard__num">{h.num}</span>
                <span className="numcard__icon">◎</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Technology" title="Powered by Advanced AI" dark />
          <div className="dcard-grid">
            {PLATFORM.map((p) => (
              <article key={p.title} className="dcard">
                <span className="dcard__icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Feedback" title="What our clients say" />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="Deploy your Voice Agent today."
        sub="Elevate your customer experience with intelligent, natural voice conversations."
        primary={{ label: 'Explore Technology', to: '#features' }}
      />
    </>
  )
}
