import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiAccessibility } from 'react-icons/bi';
import AnimatedIcon from './AnimatedIcon.jsx';
import './AccessibilityBar.css';

const AccessibilityBar = ({ accessibility, setAccessibility, inline = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOption = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`accessibility-bar ${inline ? 'accessibility-bar--inline' : ''}`}
      aria-label="Accessibility preferences"
    >
      <button
        type="button"
        className="accessibility-menu-trigger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle accessibility menu"
      >
        <BiAccessibility aria-hidden="true" />
      </button>
      
      {isMenuOpen && (
        <div className="accessibility-menu-dropdown" role="menu">
          <button
            type="button"
            className={`accessibility-btn ${accessibility.largeText ? 'active' : ''}`}
            onClick={() => toggleOption('largeText')}
          >
            <AnimatedIcon name="text" />
            <span>Large Text</span>
          </button>
          <button
            type="button"
            className={`accessibility-btn ${accessibility.highContrast ? 'active' : ''}`}
            onClick={() => toggleOption('highContrast')}
          >
            <AnimatedIcon name="contrast" />
            <span>High Contrast</span>
          </button>
          <button
            type="button"
            className={`accessibility-btn ${accessibility.reduceMotion ? 'active' : ''}`}
            onClick={() => toggleOption('reduceMotion')}
          >
            <AnimatedIcon name="motion" />
            <span>Reduce Motion</span>
          </button>
        </div>
      )}
    </div>
  );
};

AccessibilityBar.propTypes = {
  accessibility: PropTypes.shape({
    largeText: PropTypes.bool,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
  inline: PropTypes.bool,
};

export default AccessibilityBar;
