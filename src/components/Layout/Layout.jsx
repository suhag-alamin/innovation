import PropTypes from "prop-types";
import Footer from "./Footer";
import NavigationBar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      {/* className="main-content" */}
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
