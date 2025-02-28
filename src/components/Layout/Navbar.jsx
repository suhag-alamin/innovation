/* eslint-disable react/prop-types */
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../styles/navbar.scss";
import { ArrowRight, Logo } from "../Image";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const navbarClass =
    location.pathname === "/about-innovation"
      ? "navbar-main about-innovation"
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
      to="/about-innovation"
      className={({ isActive }) =>
        isActive
          ? "active about d-flex justify-content-between align-items-center"
          : "about d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      About Innovation
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>

    <NavLink
      to="/investments"
      className={({ isActive }) =>
        isActive
          ? "active investments d-flex justify-content-between align-items-center"
          : "investments d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      Investments
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>
    <NavLink
      to="/funding"
      className={({ isActive }) =>
        isActive
          ? "active funding d-flex justify-content-between align-items-center"
          : "funding d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      Funding
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>
    <NavLink
      to="/education"
      className={({ isActive }) =>
        isActive
          ? "active education-link d-flex justify-content-between align-items-center"
          : "education-link d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      Education
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>
    <NavLink
      to="/research"
      className={({ isActive }) =>
        isActive
          ? "active research d-flex justify-content-between align-items-center"
          : "research d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      Research
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "active contact d-flex justify-content-between align-items-center"
          : "contact d-flex justify-content-between align-items-center"
      }
      onClick={handleClose}
    >
      Contact
      <div className="d-lg-none">
        <ArrowRight />
      </div>
    </NavLink>
  </>
);

export default NavigationBar;
