import SkillPill from './SkillPill.jsx';

function SkillCategoryBlock({ markerClassName, title, skills, revealDelay }) {
  return (
    <div
      className="skills-card-glow-wrap"
      data-reveal
      style={{ '--reveal-delay': revealDelay }}
    >
      <article className="skills-card">
        <div className="skills-card-header">
          <span className={`marker ${markerClassName}`} />
          <h3>{title}</h3>
        </div>
        <div className="pill-group">
          {skills.map((skill) => (
            <SkillPill key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </article>
    </div>
  );
}

export default SkillCategoryBlock;
