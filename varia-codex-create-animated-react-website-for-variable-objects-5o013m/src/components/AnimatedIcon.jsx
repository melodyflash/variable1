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
        d="M5.5 5.5h9.25M5.5 9h9.25M5.5 12.5h5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 4h10.5c.83 0 1.5.67 1.5 1.5V18c0 .83-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5V5.5C6.5 4.67 7.17 4 8 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  artifact: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 4 5 8v8l7 4 7-4V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="12" r="2.8" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  signage: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M6 5h12l-2 4H8l-2-4Zm2 9h8l2 4H6l2-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path d="M7.5 7.5a6.36 6.36 0 0 1 0 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M16.5 7.5a6.36 6.36 0 0 0 0 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M4.5 4.5a10.21 10.21 0 0 1 0 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M19.5 4.5a10.21 10.21 0 0 0 0 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  insight: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 3a6 6 0 0 1 3 11.2V18h-6v-3.8A6 6 0 0 1 12 3Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M10 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  engagement: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 20s-7-4.35-7-9.25A4.25 4.25 0 0 1 9.25 6 4.23 4.23 0 0 1 12 7.21 4.23 4.23 0 0 1 14.75 6 4.25 4.25 0 0 1 19 10.75C19 15.65 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  ),
  retention: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 4a8 8 0 1 0 8 8" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 2v4l2-2M20 12h-4l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  efficiency: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4 9h16M9 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m7 10 5-5 5 5M7 14h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  optimize: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 18h3l2-3 2 2 4-6 3 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M5 4h9l5 4v12H5z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M14 4v4h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  immersive: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M7 12h2l1.5 2 3-4 1.5 2H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4 12h5M15 12h5M12 4v5M12 15v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M3 9h18L12 4 3 9Zm2 3h14v6l-7 2-7-2v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 21c4-3 7-6.58 7-10.5A4.5 4.5 0 0 0 12 6a4.5 4.5 0 0 0-7 4.5C5 14.42 8 18 12 21Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  creativity: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 3a4.5 4.5 0 0 1 4.5 4.5c0 2-1 3.5-2.5 4.7V18a2 2 0 0 1-2 2h-1.5a1.5 1.5 0 0 1-1.5-1.5V15C7 14 6 12.5 6 10.5A4.5 4.5 0 0 1 10.5 6c.53 0 1.04.1 1.5.28" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4 18v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M12 10.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
