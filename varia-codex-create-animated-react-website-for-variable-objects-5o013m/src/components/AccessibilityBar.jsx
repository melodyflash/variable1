import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const AccessibilityBar = ({ accessibility, setAccessibility, className = '' }) => {
  const toggleOption = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={`accessibility-bar ${className}`.trim()} aria-label="Accessibility preferences">
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
  className: PropTypes.string,
};

export default AccessibilityBar;
