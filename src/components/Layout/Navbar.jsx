/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/navbar.scss";
import { Logo } from "../Image";

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-main" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-3">
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              onClick={() => setShowOffcanvas((prev) => !prev)}
            />
          </div>
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeOffcanvas}
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Link to="/">
                  <Logo />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end">
              <Nav className=" NavList">
                <NavLinkComponent closeOffcanvas={closeOffcanvas} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

const NavLinkComponent = ({ closeOffcanvas }) => (
  <>
    <NavLink
      to="/about-innovat"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      About Innovat
    </NavLink>

    <NavLink
      to="/investments"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Investments
    </NavLink>
    <NavLink
      to="/funding"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Funding
    </NavLink>
    <NavLink
      to="/education"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Education
    </NavLink>
    <NavLink
      to="/research"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Research
    </NavLink>
    <NavLink
      to="/contact"
      onClick={closeOffcanvas}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Contact
    </NavLink>
  </>
);

export default NavigationBar;
