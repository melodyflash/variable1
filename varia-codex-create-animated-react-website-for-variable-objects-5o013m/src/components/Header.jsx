import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';
import AccessibilityBar from './AccessibilityBar.jsx';
import Navigation from './Navigation.jsx';

const Header = ({ theme, setTheme, accessibility, setAccessibility }) => {
  return (
    <header className="site-header">
      <Navigation />
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
          inline
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
