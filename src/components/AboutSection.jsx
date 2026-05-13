const highlights = [
  'Use Python, JavaScript, and data analytics to find patterns and build smarter, more useful tools.',
  'Juggle T-Level studies with freelance projects and hackathons that put data to work in real situations.',
  'Care about AI for social impact, especially fair decision systems and inclusive digital design.',
  'Support mental wellness, creativity, and projects that grow from community ideas.',
  'Stay motivated by curiosity, trying new things, and learning as I build.',
];

function AboutSection() {
  return (
    <section id="about" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">About</p>
        <h2>Purpose-led technologist</h2>
      </div>

      <p data-reveal style={{ '--reveal-delay': '0.1s' }}>
        Driven to use AI, machine learning, and data science to create real, lasting change.
        I&apos;ve worked on projects that blend data, strategy, and design thinking — turning
        ideas into results people can actually use. Strong in problem-solving and
        collaboration, I care about building tools that make a difference, not just meet specs.
      </p>

      <ul className="bio-highlights">
        {highlights.map((text, i) => (
          <li
            key={i}
            data-reveal
            style={{ '--reveal-delay': `${0.15 + i * 0.07}s` }}
          >
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutSection;
