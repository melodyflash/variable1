import ServiceCard from '../components/ServiceCard.jsx';
import AnimatedIcon from '../components/AnimatedIcon.jsx';

const services = [
  {
    title: 'Scannable Artifacts & Smart Checkpoints',
    stat: '61% prefer contactless experiences — Oracle Hospitality',
    icon: 'artifact',
    points: [
      'Menus, catalogs, FAQs, and instant payments triggered from artistic NFC and QR pieces',
      'CMS-driven content updates with multilingual support and seasonal storytelling',
      'Integrated loyalty captures that sync to CRM and marketing automation suites',
    ],
  },
  {
    title: 'Responsive Signage, Lights & Queue Entertainment',
    stat: 'Repeat visits up 30% with interactive media — Forrester',
    icon: 'signage',
    points: [
      'Projection-mapped murals and LED sculptures that shift with crowd energy',
      'Dynamic wait-time storytelling that reduces perceived queue length by 25%',
      'Ambient audio and scent triggers designed with sensory specialists to keep guests exploring',
    ],
  },
  {
    title: 'Sensors, Alerts & Analytics Orchestration',
    stat: 'Loss prevention improves 34% with IoT sensing — NRF 2023',
    icon: 'sensor',
    points: [
      'Environmental, occupancy, and asset sensors feeding predictive dashboards',
      'Real-time SMS and Slack alerts for anomalies, inventory dips, or VIP arrivals',
      'Executive analytics tying experiential KPIs to sales, staffing, and sustainability goals',
    ],
  },
];

const serviceHighlights = [
  {
    title: 'Staff support',
    description:
      'Verizon\'s 2023 survey shows 76% of frontline teams feel less overwhelmed when IoT tools automate routine updates.',
    icon: 'automation',
  },
  {
    title: 'Customer curiosity',
    description:
      'Experiential commerce studies reveal interactive landmarks boost average order value by 18% while shortening decision time.',
    icon: 'immersive',
  },
  {
    title: 'Data clarity',
    description:
      'IBM notes companies blending IoT analytics with BI platforms make faster decisions 3x more often than competitors.',
    icon: 'insight',
  },
];

const Services = () => {
  return (
    <div className="page services-page">
      <section className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>IoT systems designed like installations, tuned like intelligence hubs</h1>
        <p>
          Harvard Business Review highlights that organizations weaving IoT data into decision-making see profit margins grow 8%
          faster than peers. Our team engineers connected journeys that balance aesthetics, inclusivity, and analytics rigor.
        </p>
      </section>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <section className="service-highlight">
        <h2>Why move now?</h2>
        <ul>
          {serviceHighlights.map((item) => (
            <li key={item.title}>
              <span className="card-icon">
                <AnimatedIcon name={item.icon} />
              </span>
              <div>
                <strong>{item.title}:</strong> {item.description}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Services;
