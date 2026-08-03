import { FiArrowRight } from 'react-icons/fi';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-glow" aria-hidden="true"></div>
      <div className="container about-hero-container">
        <h1 className="about-hero-heading">
          We didn't build
          <br />
          an AI company.
          <br />
          We built a better future.
        </h1>
        <p className="about-hero-subtext">
          Encegen was born from a simple frustration – that most enterprise
          software talks about AI, but very few actually deliver it.
        </p>
        <div className="about-hero-actions">
          <a href="#" className="btn btn-solid">
            Read the story <FiArrowRight />
          </a>
          <a href="#" className="btn btn-outline">
            Our values
          </a>
        </div>
      </div>
    </section>
  );
}
