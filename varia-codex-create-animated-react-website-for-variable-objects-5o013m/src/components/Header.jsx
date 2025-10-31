import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';
import AccessibilityBar from './AccessibilityBar.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
];

const Header = ({ theme, setTheme, accessibility, setAccessibility }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (event) => {
    const { value } = event.target;
    if (value !== location.pathname) {
      navigate(value);
    }
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <label htmlFor="page-switcher" className="sr-only">
          Navigate to page
        </label>
        <div className="page-switcher">
          <AnimatedIcon name="pages" />
          <select id="page-switcher" value={location.pathname} onChange={handleSelect}>
            {navItems.map((item) => (
              <option key={item.to} value={item.to}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Link to="/" className="logo" aria-label="Variable Objects home">
        <AnimatedIcon name="logo" />
        <span className="logo-text">
          Variable <span>Objects</span>
        </span>
      </Link>
      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle button-ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <AnimatedIcon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <AccessibilityBar
          accessibility={accessibility}
          setAccessibility={setAccessibility}
          variant="inline"
        />
        <a className="cta button-primary" href="#contact" role="button">
          <span>Let&apos;s Talk</span>
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  accessibility: PropTypes.shape({
    largeText: PropTypes.bool,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
};

export default Header;
