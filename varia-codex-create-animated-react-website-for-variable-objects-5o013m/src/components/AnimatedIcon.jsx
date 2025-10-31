import PropTypes from 'prop-types';

const paths = {
  logo: (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--logo-stop-1)" />
          <stop offset="100%" stopColor="var(--logo-stop-2)" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="12"
        fill="transparent"
        stroke="url(#logo-gradient)"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="32" r="10" fill="url(#logo-gradient)" opacity="0.45" />
      <circle cx="32" cy="32" r="5" fill="var(--logo-core)" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 4.75V2m0 20v-2.75M4.75 12H2m20 0h-2.75M6.22 6.22 4.4 4.4m15.18 15.18-1.82-1.82M6.22 17.78 4.4 19.6m15.18-15.18-1.82 1.82"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        fill="currentColor"
      />
    </svg>
  ),
  text: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  contrast: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18V3Z" fill="currentColor" />
      <path d="M12 3a9 9 0 0 1 0 18V3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 12h4l2-4 4 8 2-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <polygon points="12 7 15.5 15.5 12 13 8.5 15.5" fill="currentColor" opacity="0.85" />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="m7 9 5 6 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 7h16M4 12h16M8 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  accessibility: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="5.5" r="2" fill="currentColor" />
      <path
        d="M4 9h16l-1 2.5-5 1V20l-3-.5v-7.99l-5-1L4 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  artifact: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 9h6v6H9z" fill="currentColor" opacity="0.35" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  beacon: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M5.5 6.5a9 9 0 0 1 0 11m13-11a9 9 0 0 0 0 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 9.5a5 5 0 0 1 0 5m7-5a5 5 0 0 0 0 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="4" y="9" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <path d="M14 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 5h12M6 19h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  engagement: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 20s-6-3.4-6-8a4 4 0 0 1 7-2.5A4 4 0 0 1 18 12c0 4.6-6 8-6 8Z"
        fill="currentColor"
      />
      <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  loyalty: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 4 4 9l8 5 8-5-8-5Zm0 16v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    </svg>
  ),
  efficiency: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 4 5 6m12-2 2 2m-2 12 2 2M7 20l-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 5h14v6H5z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 9h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="7" y="13" width="10" height="6" rx="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 11h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="m12 7 7 5-7 5V7Z" fill="currentColor" />
      <path d="M5 17h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  optimize: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20 12a8 8 0 0 1-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 5h12l-1 10a5 5 0 0 1-10 0L6 5Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M10 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  ),
  artistry: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 16c0 2.21 2.69 4 6 4s6-1.79 6-4-2.69-4-6-4-6-1.79-6-4 2.69-4 6-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="9" cy="7" r="1.5" fill="currentColor" />
      <path d="M15 13c1.3-.67 3-2.17 3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="7.5" cy="9" r="2" fill="currentColor" />
      <circle cx="16.5" cy="9" r="2" fill="currentColor" />
      <path d="M4 18a3.5 3.5 0 0 1 7 0m9 0a3.5 3.5 0 0 0-7 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="15" r="2" fill="currentColor" opacity="0.35" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 8h11v5a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M17 9h1a2 2 0 0 1 0 4h-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 5c0-.5.4-1 1-1s1 .5 1 1-.5 1-1 1 0 .5 0 1m3-2c0-.5.4-1 1-1s1 .5 1 1-.5 1-1 1 0 .5 0 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  immersive: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 12h2l1 2 2-4 1 2h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 7h16l-1.2 9.5a3 3 0 0 1-3 2.5H8.2a3 3 0 0 1-3-2.5L4 7Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="m3 10 9-6 9 6-9 6-9-6Zm9 6v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4.98 3.5a2 2 0 1 0 .02 4 2 2 0 0 0-.02-4ZM4 8.75h2v11.5H4ZM9.5 8.75H11v1.6h.03c.21-.4.74-1.04 1.92-1.04 2.05 0 2.43 1.35 2.43 3.1v7.84h-2v-6.95c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.66 1.8-2.66 3.66v7.08h-2V8.75Z" fill="currentColor" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M19.5 7.5a3.35 3.35 0 0 1-1.4.58 2.39 2.39 0 0 0 1.06-1.32 4.63 4.63 0 0 1-1.56.73 2.26 2.26 0 0 0-3.9 1.56c0 .18.02.36.06.54A6.42 6.42 0 0 1 6 6.65a2.26 2.26 0 0 0 .7 3.01 2.27 2.27 0 0 1-1.03-.27v.03a2.27 2.27 0 0 0 1.82 2.22 2.3 2.3 0 0 1-1.02.04 2.27 2.27 0 0 0 2.12 1.58 4.54 4.54 0 0 1-2.8.96c-.18 0-.36-.01-.54-.03a6.43 6.43 0 0 0 9.86-5.39c0-.1 0-.2-.01-.3a4.66 4.66 0 0 0 1.15-1.2Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const AnimatedIcon = ({ name, className = '' }) => {
  return <span className={`animated-icon ${className}`.trim()}>{paths[name]}</span>;
};

AnimatedIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(paths)).isRequired,
  className: PropTypes.string,
};

export default AnimatedIcon;
