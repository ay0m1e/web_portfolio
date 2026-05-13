import avatarImage from '../assets/images/Avatar.png';

const HEADLINE = 'Designing data-driven products that make a real impact.';

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
          {i < words.length - 1 ? ' ' : ''}
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
          Data &amp; AI Engineer | Emerging Founder
        </p>

        <h1>
          <WordRevealH1 text={HEADLINE} />
        </h1>

        <p className="lede hero-meta-item" style={{ '--meta-delay': '1.1s' }}>
          I&apos;m a digital design and development student who mixes technical skill with
          entrepreneurial curiosity. From idea to launch, I build practical, people-focused
          tools that solve real problems and leave things better than I found them.
        </p>

        <div className="hero-meta">
          <span className="tag hero-meta-item" style={{ '--meta-delay': '1.25s' }}>
            London, UK
          </span>
          <span className="tag hero-meta-item" style={{ '--meta-delay': '1.36s' }}>
            8+ shipped projects
          </span>
          <a
            className="primary-btn primary-btn--shimmer hero-meta-item"
            href="#projects"
            style={{ '--meta-delay': '1.48s' }}
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
