import { useEffect, useRef } from 'react';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isActiveRef = { current: false };
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => {
      isActiveRef.current = true;
      dot.classList.add('cursor-dot--active');
      ring.classList.add('cursor-ring--active');
    };

    const onLeave = () => {
      isActiveRef.current = false;
      dot.classList.remove('cursor-dot--active');
      ring.classList.remove('cursor-ring--active');
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const fast = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loop = () => {
      if (fast) {
        dotX = mouseX;
        dotY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
      } else {
        dotX += (mouseX - dotX) * 0.22;
        dotY += (mouseY - dotY) * 0.22;
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
      }

      const dotSize = isActiveRef.current ? 14 : 8;
      const dotHalf = dotSize / 2;
      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.transform = `translate(${dotX - dotHalf}px,${dotY - dotHalf}px)`;
      ring.style.transform = `translate(${ringX - 16}px,${ringY - 16}px)`;

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    attachListeners();
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
