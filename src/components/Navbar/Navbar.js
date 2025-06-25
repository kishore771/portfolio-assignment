// src/components/Navbar/Navbar.js
import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

const Navbar = ({ toggleTheme, onSectionChange, darkMode }) => {
  const themeIcon = darkMode
    ? "https://i.postimg.cc/kX5L0JgM/Group.png"  // Sun icon (light mode)
    : "https://i.postimg.cc/bJNyQQH0/Moon-Black.jpg"; // Moon icon (dark mode)

  const logoSrc = darkMode
    ? "https://i.postimg.cc/85Y46SLD/Group-15.png"  // White logo for dark mode
    : "https://i.postimg.cc/vTvgf7Vy/Logo-removebg-preview.png";      // Black logo for light mode

  return (
    <BsNavbar
      expand="lg"
      sticky="top"
      className={darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}
    >
      <Container>
        <BsNavbar.Brand href="#">
          <img
            src={logoSrc}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          ANISH KUMAR SINHA
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => onSectionChange("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => onSectionChange("about")}>About</Nav.Link>
            <Nav.Link>Resume</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              <img
                src={themeIcon}
                alt="Toggle Theme"
                style={{ height: "24px" }}
              />
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
