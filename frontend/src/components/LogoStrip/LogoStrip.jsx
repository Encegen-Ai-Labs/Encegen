import './LogoStrip.css';

const COMPANIES = [
  'IBM',
  'Airbus',
  'Uber',
  'Siemens',
  'Vodafone',
  'Celanese',
  'Coca-Cola',
  'Wipro',
];

export default function LogoStrip() {
  return (
    <section className="logostrip-section">
      <div className="container">
        <p className="logostrip-caption">
          TRUSTED BY THE WORLD'S LEADING COMPANIES
        </p>
        <div className="logostrip-row">
          {COMPANIES.map((name) => (
            <span key={name} className="logostrip-name">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
