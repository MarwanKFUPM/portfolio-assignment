import React from 'react';

export default function TransitionLayer({ transition }) {
  if (!transition) return null;
  const { phase, origin, image, title } = transition;
  const vars = {
    '--origin-x': `${origin.left}px`, '--origin-y': `${origin.top}px`,
    '--origin-width': `${Math.max(38, origin.width)}px`,
    '--origin-height': `${Math.max(38, origin.height)}px`,
    '--transition-image': `url("${image || '/art/portfolio.svg'}")`,
  };
  return (
    <div className={`transition-layer transition-layer--${phase}`} aria-hidden="true">
      <div className="transition-image" style={vars}>
        <span className="transition-title">{title || 'The archive'}</span>
      </div>
      <div className="transition-wash" />
    </div>
  );
}
