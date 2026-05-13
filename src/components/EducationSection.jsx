import schoolLogo from '../assets/images/school-logo.jpg';

function EducationSection() {
  return (
    <section id="education" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Education</p>
        <h2>Higher Education</h2>
      </div>

      <a className="education-card" href="https://barkingdagenhamcollege.ac.uk/" target="_blank" rel="noopener" data-reveal style={{ '--reveal-delay': '0.12s' }}>
        <img src={schoolLogo} alt="Barking and Dagenham College logo" />
        <div>
          <h3>Barking and Dagenham College</h3>
          <p>T Level - Digital Design, Production &amp; Development</p>
        </div>
        <span className="edu-period">2024 - 2026</span>
      </a>
    </section>
  );
}

export default EducationSection;
