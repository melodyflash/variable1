import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const TEXT_SIZES = [
  { label: 'Default', value: 'base' },
  { label: 'Comfortable', value: 'large' },
  { label: 'Extra Large', value: 'xlarge' },
];

const AccessibilityBar = ({ accessibility, setAccessibility }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleOption = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const setTextScale = (value) => {
    setAccessibility((prev) => ({
      ...prev,
      textScale: value,
    }));
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="accessibility-launcher" ref={panelRef}>
      <button
        type="button"
        className={`accessibility-toggle ${open ? 'open' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="accessibility-menu"
        aria-label="Accessibility preferences"
        onClick={() => setOpen((prev) => !prev)}
      >
        <AnimatedIcon name="accessibility" />
      </button>
      <div id="accessibility-menu" className={`accessibility-panel ${open ? 'open' : ''}`}>
        <p className="panel-title">Accessibility</p>
        <div className="panel-group">
          <span className="panel-label">Text size</span>
          <div className="text-size-options">
            {TEXT_SIZES.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`panel-chip ${accessibility.textScale === option.value ? 'active' : ''}`}
                onClick={() => setTextScale(option.value)}
              >
                <AnimatedIcon name="text" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="panel-group">
          <span className="panel-label">Display</span>
          <button
            type="button"
            className={`panel-chip ${accessibility.highContrast ? 'active' : ''}`}
            onClick={() => toggleOption('highContrast')}
          >
            <AnimatedIcon name="contrast" />
            <span>High contrast</span>
          </button>
          <button
            type="button"
            className={`panel-chip ${accessibility.reduceMotion ? 'active' : ''}`}
            onClick={() => toggleOption('reduceMotion')}
          >
            <AnimatedIcon name="motion" />
            <span>Reduce motion</span>
          </button>
        </div>
      </div>
    </div>
  );
};

AccessibilityBar.propTypes = {
  accessibility: PropTypes.shape({
    textScale: PropTypes.string,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
};

export default AccessibilityBar;
