/* eslint-disable react/prop-types */
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../styles/navbar.scss";
import { Logo } from "../Image";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const navbarClass =
    location.pathname === "/about-innovat"
      ? "navbar-main about-innovat"
      : "navbar-main";

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${navbarClass} icontainer`}
        expanded={expanded}
      >
        <div className="navbar-wrapper-container">
          <Navbar.Brand className="navbar-brand">
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-3">
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              onClick={handleToggle}
            />
          </div>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavList">
            <NavLinkComponent handleClose={handleClose} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const NavLinkComponent = ({ handleClose }) => (
  <>
    <NavLink
      to="/about-innovat"
      className={({ isActive }) => (isActive ? "active about" : "about")}
      onClick={handleClose}
    >
      About Innovat
    </NavLink>

    <NavLink
      to="/investments"
      className={({ isActive }) =>
        isActive ? "active investments" : "investments"
      }
      onClick={handleClose}
    >
      Investments
    </NavLink>
    <NavLink
      to="/funding"
      className={({ isActive }) => (isActive ? "active funding" : "funding")}
      onClick={handleClose}
    >
      Funding
    </NavLink>
    <NavLink
      to="/education"
      className={({ isActive }) =>
        isActive ? "active education-link" : "education-link"
      }
      onClick={handleClose}
    >
      Education
    </NavLink>
    <NavLink
      to="/research"
      className={({ isActive }) => (isActive ? "active research" : "research")}
      onClick={handleClose}
    >
      Research
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? "active contact" : "contact")}
      onClick={handleClose}
    >
      Contact
    </NavLink>
  </>
);

export default NavigationBar;
