function SkillPill({ icon: IconComponent, label }) {
  return (
    <span>
      {IconComponent ? <IconComponent aria-hidden="true" /> : null}
      {label}
    </span>
  );
}

export default SkillPill;
