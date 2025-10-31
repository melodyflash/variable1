import AnimatedIcon from '../components/AnimatedIcon.jsx';

const principles = [
  {
    title: 'Ethics in every interaction',
    description:
      'We champion privacy-first data practices, transparent consent, and responsible AI. Our team maps every touchpoint to ensure insights elevate staff and guests without compromising humanity.',
    icon: 'ethics',
  },
  {
    title: 'Art + Tech = Delight',
    description:
      'Sculptors, lighting designers, and creative coders collaborate with system engineers to deliver responsive art that doubles as business infrastructure. Expect installations that look gallery-ready while quietly managing your ops.',
    icon: 'delight',
  },
  {
    title: 'Community-minded partnerships',
    description:
      'We reinvest in local makers across the West Coast, prioritizing inclusive hiring and education programs that help communities thrive alongside the technology.',
    icon: 'community',
  },
];

const About = () => {
  return (
    <div className="page about-page">
      <section className="section-heading narrow">
        <p className="eyebrow">Community-built, future-ready</p>
        <h1>Rooted in Ocean Beach, crafting ethical connections everywhere</h1>
        <p>
          Variable Objects started as a collective of artists, technologists, and neighborhood advocates designing installations
          for the Ocean Beach Pier. We believe connection is more than bandwidth—it&apos;s the trust between people, devices, and the
          communities they serve.
        </p>
      </section>
      <section className="about-grid">
        {principles.map((principle) => (
          <article key={principle.title}>
            <div className="card-icon" aria-hidden="true">
              <AnimatedIcon name={principle.icon} />
            </div>
            <h2>{principle.title}</h2>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>
      <section className="callout">
        <h2>Let&apos;s create brighter, kinder experiences</h2>
        <p>
          From San Diego surf shops to Seattle innovation labs, we build connected ecosystems that celebrate place, culture, and
          the people who power them.
        </p>
      </section>
    </div>
  );
};

export default About;
