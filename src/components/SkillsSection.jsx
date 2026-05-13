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
import { BiData } from 'react-icons/bi';
import { TbChartBar } from 'react-icons/tb';
import {
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiTailwindcss,
  SiSupabase,
  SiStripe,
  SiVercel,
  SiPhp,
} from 'react-icons/si';
import SkillCategoryBlock from './SkillCategoryBlock.jsx';

const tier1 = [
  {
    title: 'Languages',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'Python', icon: FaPython },
      { label: 'JavaScript', icon: FaJsSquare },
      { label: 'PHP', icon: SiPhp },
      { label: 'HTML', icon: FaHtml5 },
      { label: 'CSS', icon: FaCss3Alt },
      { label: 'SQL', icon: BiData },
    ],
  },
  {
    title: 'Frameworks',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'FastAPI', icon: null },
      { label: 'Flask', icon: SiFlask },
      { label: 'React', icon: FaReact },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Databases',
    markerClassName: 'marker-backend',
    skills: [
      { label: 'Supabase', icon: SiSupabase },
      { label: 'SQL', icon: BiData },
    ],
  },
  {
    title: 'Payments, Auth & Email',
    markerClassName: 'marker-tools',
    skills: [
      { label: 'Stripe', icon: SiStripe },
      { label: 'Supabase Auth', icon: null },
      { label: 'Resend', icon: null },
    ],
  },
  {
    title: 'Deployment & Hosting',
    markerClassName: 'marker-tools',
    skills: [
      { label: 'Vercel', icon: SiVercel },
      { label: 'Railway', icon: null },
      { label: 'GitHub Pages', icon: FaGithub },
      { label: 'IONOS', icon: null },
    ],
  },
  {
    title: 'Data & Analysis',
    markerClassName: 'marker-backend',
    skills: [
      { label: 'Pandas', icon: SiPandas },
      { label: 'NumPy', icon: SiNumpy },
      { label: 'Matplotlib', icon: TbChartBar },
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
    title: 'Tooling',
    markerClassName: 'marker-tools',
    skills: [
      { label: 'Git', icon: FaGitAlt },
      { label: 'GitHub', icon: FaGithub },
      { label: 'Figma', icon: FaFigma },
      { label: 'VS Code', icon: FaCode },
    ],
  },
];

const tier2 = [
  {
    title: 'AI Systems',
    markerClassName: 'marker-frontend',
    skills: [
      { label: 'RAG Pipelines', icon: null },
      { label: 'Vector Search', icon: null },
      { label: 'Embeddings', icon: null },
      { label: 'Multi-Agent Orchestration', icon: null },
      { label: 'Tool Calling', icon: null },
    ],
  },
  {
    title: 'Backend Architecture',
    markerClassName: 'marker-backend',
    skills: [
      { label: 'Async Systems', icon: null },
      { label: 'Service Boundaries', icon: null },
      { label: 'API Design Patterns', icon: null },
      { label: 'Dependency Injection', icon: null },
    ],
  },
  {
    title: 'Infrastructure',
    markerClassName: 'marker-tools',
    skills: [
      { label: 'Observability', icon: null },
      { label: 'AI Governance', icon: null },
      { label: 'Audit Systems', icon: null },
      { label: 'Deployment Pipelines', icon: null },
      { label: 'System Reliability', icon: null },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Skills &amp; Technologies</p>
        <h2>Technical Stack</h2>
        <p className="section-subtitle">
          What I build with, across backend, data, AI and product.
        </p>
      </div>

      {/* Tier 1 */}
      <div className="section-heading" data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <h3>What I build with</h3>
        <p className="section-subtitle">
          Technologies with real project and deployment experience
        </p>
      </div>
      <div className="skills-grid">
        {tier1.map((category, i) => (
          <SkillCategoryBlock
            key={category.title}
            markerClassName={category.markerClassName}
            title={category.title}
            skills={category.skills}
            revealDelay={`${i * 0.07}s`}
          />
        ))}
      </div>

      {/* Tier 2 */}
      <div className="section-heading" data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <h3>What I&apos;m building toward</h3>
        <p className="section-subtitle">
          Active study areas. Conceptual depth, implementation growing.
        </p>
      </div>
      <div className="skills-grid">
        {tier2.map((category, i) => (
          <SkillCategoryBlock
            key={category.title}
            markerClassName={category.markerClassName}
            title={category.title}
            skills={category.skills}
            revealDelay={`${i * 0.07}s`}
          />
        ))}
      </div>

      {/* Tier 3 */}
      <div className="skills-card-glow-wrap" data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <article className="skills-card">
          <div className="skills-card-header">
            <span className="marker marker-tools" />
            <h3>How I think</h3>
          </div>
          <p className="lede">
            I think in systems before I think in code. Architecture, tradeoffs and
            long-term maintainability matter more to me than shipping fast and
            breaking things.
          </p>
          <p className="lede">
            Building toward AI infrastructure and backend systems engineering as a
            long-term technical focus.
          </p>
        </article>
      </div>
    </section>
  );
}

export default SkillsSection;
