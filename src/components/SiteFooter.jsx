import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import mailIcon from '../assets/icons/mail.svg';
import cvIcon from '../assets/icons/file-text.svg';

function SiteFooter() {
  return (
    <footer className="site-footer" data-reveal>
      <p>Let&apos;s build something worth building.</p>
      <div className="footer-links">
        <a href="https://github.com/ay0m1e" target="_blank" rel="noopener" title="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayomide-alonge-897287330"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:ayomide.alonge.08@gmail.com" title="Email">
          <img src={mailIcon} alt="Email" />
        </a>
        <a
          href="https://docs.google.com/document/d/1h53LhRnbQ4KFLptO6v9tfhWWwgXUdTz79scmUYLSS4I/edit?usp=sharing"
          target="_blank"
          rel="noopener"
          title="Download CV"
        >
          <img src={cvIcon} alt="CV" />
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
