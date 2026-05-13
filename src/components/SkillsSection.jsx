import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
} from 'react-icons/fa';
import { MdOutlineApi } from 'react-icons/md';
import { BiData } from 'react-icons/bi';
import { TbChartBar } from 'react-icons/tb';
import {
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiNumpy,
  SiPandas,
} from 'react-icons/si';
import SkillCategoryBlock from './SkillCategoryBlock.jsx';

const skillCategories = [
  {
    title: 'Frontend Experience',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'React', icon: FaReact },
      { label: 'HTML', icon: FaHtml5 },
      { label: 'CSS', icon: FaCss3Alt },
      { label: 'JavaScript', icon: FaJsSquare },
      { label: 'API Development', icon: MdOutlineApi },
    ],
  },
  {
    title: 'Backend',
    markerClassName: 'marker-backend',
    skills: [
      { label: 'Python', icon: FaPython },
      { label: 'SQL', icon: BiData },
      { label: 'MatPlotLib', icon: TbChartBar },
    ],
  },
  {
    title: 'Machine Learning',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'Scikit-learn', icon: SiScikitlearn },
      { label: 'TensorFlow', icon: SiTensorflow },
      { label: 'Keras', icon: SiKeras },
      { label: 'JupyterLab', icon: SiJupyter },
    ],
  },
  {
    title: 'Data Analysis and Visualisation',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'NumPy', icon: SiNumpy },
      { label: 'Pandas', icon: SiPandas },
    ],
  },
  {
    title: 'Tools & Services',
    markerClassName: 'marker-tools',
    skills: [
      { label: 'Git', icon: FaGitAlt },
      { label: 'GitHub', icon: FaGithub },
      { label: 'Figma', icon: FaFigma },
      { label: 'VS Code', icon: FaCode },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Skills &amp; Technologies</p>
        <h2>Tools I deliver with</h2>
        <p className="section-subtitle">Across the stack, focusing on human-centered outcomes.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <SkillCategoryBlock
            key={category.title}
            markerClassName={category.markerClassName}
            title={category.title}
            skills={category.skills}
            revealDelay={`${i * 0.09}s`}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
