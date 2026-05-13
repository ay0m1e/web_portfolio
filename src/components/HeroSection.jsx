import avatarImage from '../assets/images/Avatar.png';

const HEADLINE = 'Building intelligent systems that turn data into decisions.';

function WordRevealH1({ text }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="word-wrap">
          <span
            className="word-inner"
            style={{ '--delay': `${i * 0.09}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-meta-item" style={{ '--meta-delay': '0s' }}>
          AI &amp; Data Systems Engineer · Emerging Founder
        </p>

        <h1>
          <WordRevealH1 text={HEADLINE} />
        </h1>

        <p className="lede hero-meta-item" style={{ '--meta-delay': '1.1s' }}>
          I&apos;m Ayomide, an 18-year-old engineer based in London building AI-integrated
          tools, data pipelines and backend systems. I work across the full stack from
          model to product, with a long-term focus on infrastructure and founding.
        </p>

        <div className="hero-meta">
          <span className="tag hero-meta-item" style={{ '--meta-delay': '1.25s' }}>
            London, UK
          </span>
          <span className="tag hero-meta-item" style={{ '--meta-delay': '1.36s' }}>
            8+ shipped projects
          </span>
          <span className="tag hero-meta-item" style={{ '--meta-delay': '1.47s' }}>
            Open to opportunities
          </span>
          <a
            className="primary-btn primary-btn--shimmer hero-meta-item"
            href="#projects"
            style={{ '--meta-delay': '1.58s' }}
          >
            View my work
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-glow" />
        <img src={avatarImage} alt="Portrait of Ayomide Alonge" />
      </div>
    </section>
  );
}

export default HeroSection;
