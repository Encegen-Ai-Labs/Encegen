import useScrollReveal from '../../hooks/useScrollReveal';
import './Values.css';

const VALUES = [
  {
    number: '01',
    title: 'Honesty over hype',
    sub: "We'll tell you when AI is the wrong answer.",
    bgVar: '--value-purple-bg',
    borderVar: '--brand-purple',
  },
  {
    number: '02',
    title: 'Speed with integrity',
    sub: 'We move fast and we never cut corners.',
    bgVar: '--value-blue-bg',
    borderVar: '--accent-blue',
  },
  {
    number: '03',
    title: 'Client obsession',
    sub: 'Your success is our only KPI.',
    bgVar: '--value-teal-bg',
    borderVar: '--brand-teal',
  },
  {
    number: '04',
    title: 'Radical clarity',
    sub: 'No jargon. No confusion. Just results.',
    bgVar: '--value-maroon-bg',
    borderVar: '--status-red',
  },
  {
    number: '05',
    title: 'Built to last',
    sub: 'We build for 10 years, not the next demo.',
    bgVar: '--value-olive-bg',
    borderVar: '--accent-olive-bright',
  },
  {
    number: '06',
    title: 'Human first',
    sub: 'AI should amplify people, never replace them.',
    bgVar: '--value-violet-bg',
    borderVar: '--accent-violet',
  },
];

export default function Values() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`values-section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2 className="values-heading">What we stand for.</h2>

        <div className="values-grid">
          {VALUES.map((value) => (
            <div
              className="value-card"
              key={value.number}
              style={{
                background: `var(${value.bgVar})`,
                borderColor: `var(${value.borderVar})`,
                '--card-accent': `var(${value.borderVar})`,
              }}
            >
              <span className="value-number">{value.number}</span>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-sub">{value.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
