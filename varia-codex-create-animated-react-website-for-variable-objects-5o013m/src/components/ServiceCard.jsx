import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const ServiceCard = ({ title, points, stat, icon }) => {
  return (
    <article className="service-card">
      <div className="service-header">
        <div className="service-title">
          <span className="card-icon" aria-hidden="true">
            <AnimatedIcon name={icon} />
          </span>
          <h3>{title}</h3>
        </div>
      </div>
      <ul>
        {points.map((point) => (
          <li key={point}>
            <AnimatedIcon name="arrow" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {stat && <span className="service-stat">{stat}</span>}
    </article>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  stat: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default ServiceCard;
