import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children, theme, setTheme, accessibility, setAccessibility, currentPath }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    if (accessibility.reduceMotion) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return undefined;
    }

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [accessibility.reduceMotion, currentPath]);

  return (
    <div className="app-shell">
      <div className="aurora" aria-hidden="true" />
      <Header
        theme={theme}
        setTheme={setTheme}
        accessibility={accessibility}
        setAccessibility={setAccessibility}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  accessibility: PropTypes.shape({
    textScale: PropTypes.string,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default Layout;
