import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import NeuralCanvas from './components/NeuralCanvas.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <>
      <NeuralCanvas />
      <CustomCursor />
      <div className="page-shell">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
