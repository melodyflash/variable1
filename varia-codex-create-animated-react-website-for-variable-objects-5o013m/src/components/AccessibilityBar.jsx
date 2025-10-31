import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const AccessibilityBar = ({ accessibility, setAccessibility, inline = false }) => {
  const toggleOption = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`accessibility-bar ${inline ? 'accessibility-bar--inline' : ''}`}
      aria-label="Accessibility preferences"
      role="group"
    >
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
