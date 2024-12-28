/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Offcanvas.Body>
              <Nav className="justify-content-center NavList">
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
    <Nav.Link href="/about-innovat" onClick={closeOffcanvas}>
      About Innovat
    </Nav.Link>

    <Nav.Link href="/investments" onClick={closeOffcanvas}>
      Investments
    </Nav.Link>
    <Nav.Link href="/funds" onClick={closeOffcanvas}>
      Funding
    </Nav.Link>
    <Nav.Link href="/education" onClick={closeOffcanvas}>
      Education
    </Nav.Link>
    <Nav.Link href="/" onClick={closeOffcanvas}>
      Research
    </Nav.Link>
    <Nav.Link href="/" onClick={closeOffcanvas}>
      Contact
    </Nav.Link>
  </>
);

export default NavigationBar;
