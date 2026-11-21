import { useEffect, useState } from 'react';

function readSize() {
  return { width: window.innerWidth, height: window.innerHeight };
}

export function useViewport() {
  const [viewport, setViewport] = useState(readSize);
  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setViewport(readSize()));
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(frame); };
  }, []);
  return viewport;
}
