import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const MetricCard = ({ label, value, description, icon }) => {
  return (
    <div className="metric-card">
      {icon && (
        <span className="card-icon metric-icon">
          <AnimatedIcon name={icon} />
        </span>
      )}
      <div className="metric-value">{value}</div>
      <p className="metric-label">{label}</p>
      <p className="metric-description">{description}</p>
      <AnimatedIcon name="arrow" />
    </div>
  );
};

MetricCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default MetricCard;
