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
  pages: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M5.5 6.75H18a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 16.75V6.5A1.5 1.5 0 0 1 6.5 5h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M8 9.5h7m-7 3h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  artifact: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="4.5" y="4" width="15" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9 9h6v6H9Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  ),
  signage: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 4h12l2 4H4l2-4Zm6 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 13h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      <path d="M7 9a7 7 0 0 1 10 0M4.5 6a10 10 0 0 1 15 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  engagement: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 4v4m0 8v4m-6-6h4m8 0h4M7 7l2.5 2.5M17 17l2.5 2.5M7 17l2.5-2.5M17 7l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  ),
  retention: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M8 4h8l3 4-3 4H8L5 8l3-4Zm8 8 3 4-3 4H8l-3-4 3-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  efficiency: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 12 16 8m-4 4H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M7 9 12 6l5 3v6l-5 3-5-3V9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M12 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 3c2.8 2.4 4.5 5.1 5 8 .5 2.8-.3 5.9-2 8 0 0-1.5-1.2-3-1.2S9 19 9 19c-1.7-2.1-2.5-5.2-2-8 .5-2.9 2.2-5.6 5-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  optimize: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M7 6v12M12 4v16M17 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      <circle cx="17" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 4 5 7v5c0 4.2 2.8 8 7 9 4.2-1 7-4.8 7-9V7l-7-3Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  delight: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 4.5 14 9l4.5.4-3.4 2.9 1.1 4.6L12 14.5 7.8 16.9 9 12.3 5.5 9.4 10 9l2-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4.5 19c.7-3 2.8-5 6-5s5.3 2 6 5m-1-4c.5-.8 1.6-1.5 2.8-1.5 2.2 0 3.7 1.8 4.2 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 7h12v6a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V7Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M18 9h1.5a2 2 0 0 1 0 4H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 4s1-.8 1-2m3 2s1-.8 1-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  immersive: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M7 10.5 12 12l5-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15.5c1 .7 1.9 1 3 1s2-.3 3-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  commerce: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 5h2l1.2 9.5a2 2 0 0 0 2 1.8H17a2 2 0 0 0 2-1.6L20 8H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="10" cy="19" r="1.4" fill="currentColor" />
      <circle cx="17" cy="19" r="1.4" fill="currentColor" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M3 12l8-2 2-6 2 6 6 2-6 2-2 6-2-6-8-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const AnimatedIcon = ({ name }) => {
  return <span className="animated-icon">{paths[name]}</span>;
};

AnimatedIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(paths)).isRequired,
};

export default AnimatedIcon;
