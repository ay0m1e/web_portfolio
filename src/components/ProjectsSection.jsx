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
        <h2>Selected Work</h2>
        <p className="section-subtitle">
          Technical builds across data systems, AI integration and product engineering.
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
              Built a differential equation simulation engine to model SIRV epidemic
              dynamics from scratch. Implemented numerical integration using NumPy to
              track population transitions across Susceptible, Infected, Recovered and
              Vaccinated states. Analysed how variable vaccination rates and transmission
              parameters affect infection curves, producing visualisations that surface
              non-obvious threshold behaviours in herd immunity modelling.
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
              <span className="project-period">Oct 2024 – Mar 2025</span>
            </div>
            <p>
              Designed and built a full production web platform supporting young women
              affected by domestic violence. Engineered the complete frontend architecture
              with structured UX flows, accessible design patterns and responsive layout.
              Integrated real-world research into product decisions to ensure the tool
              addressed genuine user needs, not just technical requirements. Deployed
              and maintained as a live production site.
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
