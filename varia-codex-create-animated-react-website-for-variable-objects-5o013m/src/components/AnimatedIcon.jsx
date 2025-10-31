import PropTypes from 'prop-types';

const paths = {
  logo: (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="transparent" stroke="url(#logo-gradient)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="10" fill="url(#logo-gradient)" opacity="0.45" />
      <circle cx="32" cy="32" r="5" fill="#f8fafc" />
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
  compass: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M14.8 9.2 12 14.8 9.2 12Z" fill="currentColor" />
    </svg>
  ),
  artifact: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 8h8M8 12h6M8 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  lighting: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M13 3 6 13h5l-1 8 8-12h-5Z" fill="currentColor" />
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path
        d="M5.5 18.5A8.5 8.5 0 0 1 5.5 5.5m13 13a8.5 8.5 0 0 0 0-12.99M8.5 15.5a4.5 4.5 0 0 1 0-6.36m7 6.36a4.5 4.5 0 0 0 0-6.36"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 20V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 20V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 20v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  loyalty: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 20s-7-4.35-7-9.23C5 7.38 7.52 5 10.35 5c1.38 0 2.65.63 3.65 1.68A5.08 5.08 0 0 1 17.65 5C20.48 5 23 7.38 23 10.77 23 15.65 16 20 16 20"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 2 7 12h5l-1 10 6-11h-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="m9 9 3 3 3-3m-6 6h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 16h16M4 12h10M4 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 12v8l5-4-5-4Z" fill="currentColor" />
    </svg>
  ),
  optimize: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="m4 14 6.5-7L15 11l5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 5h9l5 4v10H5V5Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M14 5v4h5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  immersion: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 19c1.5-3 4.5-5 8-5s6.5 2 8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  ),
  airport: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M3 19h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="m4 14 5-2 3-7 3 7 5 2-5 1v3l-3-1-3 1v-3Z" fill="currentColor" />
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 3 4 7v5c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V7l-8-4Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 15h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  delight: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 21c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm0-6a4 4 0 0 1-3.8-2.67M9 9h.01M15 9h.01"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="7" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="17" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M3 20a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 20a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

const AnimatedIcon = ({ name }) => {
  return <span className="animated-icon">{paths[name]}</span>;
};

AnimatedIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(paths)).isRequired,
};

export default AnimatedIcon;
