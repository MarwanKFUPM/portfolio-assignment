import { useEffect, useState } from 'react';

function readSize() {
  return { width: window.innerWidth, height: window.innerHeight };
}

// Delay expensive re-projection until the browser finishes a burst of resize events.
// Geometry stays unchanged during a resize; only its scale/placement is recomputed.
export function useViewport() {
  const [viewport, setViewport] = useState(readSize);
  useEffect(() => {
    let timer;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const next = readSize();
        setViewport(previous => previous.width === next.width && previous.height === next.height ? previous : next);
      }, 140);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('resize', onResize); };
  }, []);
  return viewport;
}
