const highlights = [
  'Build across the stack: data pipelines, ML models, APIs, payment systems and frontend interfaces.',
  'Currently studying T-Level Digital Design at Barking and Dagenham College whilst shipping independent projects and competing in hackathons in parallel.',
  'Focused on AI systems, data engineering and scalable backend architecture as long-term technical specialisms.',
  'Interested in founding, working toward building products and platforms, not just features.',
  'Strong bias toward building over talking about building.',
];

function AboutSection() {
  return (
    <section id="about" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">About</p>
        <h2>Engineer. Builder. Founder in progress.</h2>
      </div>

      <p data-reveal style={{ '--reveal-delay': '0.1s' }}>
        I build things that work: AI-powered tools, data systems, and backend platforms
        that solve real problems with real code.
      </p>

      <p data-reveal style={{ '--reveal-delay': '0.16s' }}>
        At 18, I&apos;m already shipping production projects with real payment flows,
        commercial hosting and transactional email, not just demos. I compete in
        hackathons, build independently, and develop the technical depth to one day
        build infrastructure-level systems.
      </p>

      <p data-reveal style={{ '--reveal-delay': '0.22s' }}>
        My work sits at the intersection of backend engineering, machine learning and
        product thinking. I care less about credentials and more about what gets built.
      </p>

      <ul className="bio-highlights">
        {highlights.map((text, i) => (
          <li
            key={i}
            data-reveal
            style={{ '--reveal-delay': `${0.28 + i * 0.07}s` }}
          >
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutSection;
