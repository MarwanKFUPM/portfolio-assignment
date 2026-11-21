import React from 'react';

const paths = {
  moon: <path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  upRight: <><path d="M6 18 18 6M8 6h10v10"/></>,
  back: <><path d="m15 18-6-6 6-6M9 12h12"/></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-6 5-6 13 0 18M12 3c6 5 6 13 0 18"/></>,
  spark: <path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
};

export default function Icon({ name, size = 18, className = '' }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.spark}</svg>;
}
