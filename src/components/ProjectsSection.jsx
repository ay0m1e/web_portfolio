import sirvVideo from '../assets/videos/SIRV Vid.mp4';
import sirvPoster from '../assets/images/SIRV.png';
import arxImage from '../assets/images/ARX proj.png';
import githubLightIcon from '../assets/icons/GitHub_Invertocat_Light.svg';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaBiohazard } from 'react-icons/fa';
import { SiNumpy } from 'react-icons/si';
import { TbChartBar } from 'react-icons/tb';
import { BiData } from 'react-icons/bi';
import SkillPill from './SkillPill.jsx';

const projectStacks = {
  sirv: [
    { label: 'Python', icon: FaPython },
    { label: 'NumPy', icon: SiNumpy },
    { label: 'Matplotlib', icon: TbChartBar },
    { label: 'Data Analysis', icon: BiData },
    { label: 'Epidemology', icon: FaBiohazard },
  ],
  arx: [
    { label: 'HTML', icon: FaHtml5 },
    { label: 'CSS', icon: FaCss3Alt },
    { label: 'JavaScript', icon: FaJsSquare },
  ],
};

function ProjectsSection() {
  return (
    <section id="projects" className="panel">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Projects</p>
        <h2>Recent work</h2>
        <p className="section-subtitle">
          Selected builds that showcase product sense, craft, and execution.
        </p>
      </div>

      <div className="projects-grid">
        <article className="project-card" data-reveal style={{ '--reveal-delay': '0.1s' }}>
          <div className="project-video-wrap">
            <video
              className="project-video"
              src={sirvVideo}
              poster={sirvPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="project-body">
            <div className="project-meta">
              <h3>SIRV Epidemic Simulation</h3>
              <span className="project-period">Oct 2025</span>
            </div>
            <p>
              Explored how vaccination affects disease spread using an SIRV mathematical model.
              Used differential equations to map how people move between health states and
              analysed infection trends under different conditions. Focused on understanding
              data and drawing insights from real-world parameters instead of just chasing
              predictions.
            </p>
            <div className="pill-group project-stack">
              {projectStacks.sirv.map((item) => (
                <SkillPill key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
          <a
            className="primary-btn subtle"
            href="https://github.com/ay0m1e/SIRV_Model"
            target="_blank"
            rel="noopener"
          >
            <img src={githubLightIcon} alt="GitHub icon" />
            View source
          </a>
        </article>

        <article className="project-card" data-reveal style={{ '--reveal-delay': '0.2s' }}>
          <img src={arxImage} alt="Preview of ARX project" />
          <div className="project-body">
            <div className="project-meta">
              <h3>ARX</h3>
              <span className="project-period">Oct 2024 - Mar 2025</span>
            </div>
            <p>
              Built a digital platform supporting young women against domestic violence,
              combining research-driven insights with thoughtful UX flows.
            </p>
            <div className="pill-group project-stack">
              {projectStacks.arx.map((item) => (
                <SkillPill key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
          <a
            className="primary-btn subtle"
            href="https://papaya-genie-c3e711.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <svg className="icon inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M3 12h18M12 3a18 18 0 0 1 0 18M12 3a18 18 0 0 0 0 18M12 3v18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Visit website
          </a>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;
