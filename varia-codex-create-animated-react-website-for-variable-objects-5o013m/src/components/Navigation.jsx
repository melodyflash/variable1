import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './Navigation.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-menu">
      <button
        type="button"
        className="nav-menu-trigger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <BiMenu aria-hidden="true" />
      </button>
      
      {isMenuOpen && (
        <div className="nav-menu-dropdown" role="menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-link-text">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;