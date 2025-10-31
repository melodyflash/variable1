import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children, theme, setTheme, accessibility, setAccessibility }) => {
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
    largeText: PropTypes.bool,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
};

export default Layout;
