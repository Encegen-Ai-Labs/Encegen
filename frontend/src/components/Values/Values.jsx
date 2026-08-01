import './Values.css';

const VALUES = [
  {
    number: '01',
    title: 'Honesty over hype',
    sub: "We'll tell you when AI is the wrong answer.",
    colorVar: '--brand-purple',
  },
  {
    number: '02',
    title: 'Speed with integrity',
    sub: 'We move fast and we never cut corners.',
    colorVar: '--accent-blue',
  },
  {
    number: '03',
    title: 'Client obsession',
    sub: 'Your success is our only KPI.',
    colorVar: '--accent-teal-deep',
  },
  {
    number: '04',
    title: 'Radical clarity',
    sub: 'No jargon. No confusion. Just results.',
    colorVar: '--accent-maroon',
  },
  {
    number: '05',
    title: 'Built to last',
    sub: 'We build for 10 years, not the next demo.',
    colorVar: '--accent-olive',
  },
  {
    number: '06',
    title: 'Human first',
    sub: 'AI should amplify people, never replace them.',
    colorVar: '--accent-violet',
  },
];

export default function Values() {
  return (
    <section className="values-section">
      <div className="container">
        <h2 className="values-heading">What we stand for.</h2>

        <div className="values-grid">
          {VALUES.map((value) => (
            <div
              className="value-card"
              key={value.number}
              style={{ background: `var(${value.colorVar})` }}
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
