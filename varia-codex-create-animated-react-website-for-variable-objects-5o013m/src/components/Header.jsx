import { useEffect, useRef, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const currentPage = navItems.find((item) => item.to === location.pathname) || navItems[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  const handleNavigate = (path) => {
    if (path !== location.pathname) {
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="page-menu" ref={menuRef}>
        <button
          type="button"
          className={`page-menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-haspopup="true"
          aria-expanded={menuOpen}
          aria-controls="page-menu-options"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <AnimatedIcon name="menu" />
          <span>{currentPage.label}</span>
          <AnimatedIcon name="chevron" />
        </button>
        <div className={`page-menu-dropdown ${menuOpen ? 'open' : ''}`} id="page-menu-options">
          <ul role="menu">
            {navItems.map((item) => (
              <li key={item.to}>
                <button
                  type="button"
                  className={location.pathname === item.to ? 'active' : ''}
                  role="menuitem"
                  onClick={() => handleNavigate(item.to)}
                >
                  <AnimatedIcon name="compass" className="menu-icon" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
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
        <AccessibilityBar accessibility={accessibility} setAccessibility={setAccessibility} />
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
    textScale: PropTypes.string,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
};

export default Header;
