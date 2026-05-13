import { useEffect, useRef } from 'react';

function SiteHeader() {
  const headerRef = useRef(null);

  useEffect(() => {
    const siteHeader = headerRef.current;
    if (!siteHeader) return undefined;

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    const handlePageShow = (event) => {
      if (event.persisted) resetScroll();
    };

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.addEventListener('load', resetScroll);
    window.addEventListener('pageshow', handlePageShow);
    resetScroll();

    let lastScrollY = window.scrollY;
    let ticking = false;
    let hideTimeout;
    const inactivityDelay = 3000;

    const scheduleAutoHide = () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        if (window.scrollY > 80) siteHeader.classList.add('is-hidden');
      }, inactivityDelay);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScrollY;
      const pastHero = currentScroll > 80;

      if (isScrollingDown && pastHero) {
        siteHeader.classList.add('is-hidden');
      } else {
        siteHeader.classList.remove('is-hidden');
      }

      if (currentScroll > 50) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }

      lastScrollY = currentScroll;
      scheduleAutoHide();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    scheduleAutoHide();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', resetScroll);
      window.removeEventListener('pageshow', handlePageShow);
      clearTimeout(hideTimeout);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <header className="site-header" id="top" ref={headerRef}>
      <a className="brand" href="#top">
        <span className="brand-mark">AA</span>
        <span className="brand-name">Ayomide Alonge</span>
      </a>

      <nav className="site-nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a className="cta" href="https://www.linkedin.com/in/ayomide-alonge-897287330">
          Let&apos;s connect
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
