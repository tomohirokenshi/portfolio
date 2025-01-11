import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import "./Button.css";

const NavBar = ({ onContactClick }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar expand="md" className="navbar" sticky="top">
        <Container className="container-nav">
          <Navbar.Brand href="#home">
            <img
              src="./images/KenshiCal.png"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <div
            className="d-md-none menu-toggle"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" className="menu-icon" />
          </div>
          <Nav className="ms-auto d-none d-md-flex">
            <Nav.Link onClick={() => handleScroll("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll("about")}>About Me</Nav.Link>
            <Nav.Link onClick={() => handleScroll("projects")}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("timeline")}>
              Timeline
            </Nav.Link>
            <Button className="contact-nav" onClick={onContactClick}>
              Contact Me
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          <FontAwesomeIcon icon={faTimes} size="lg" className="close-icon" />
        </div>
        <Nav className="flex-column">
          <Nav.Link onClick={() => handleScroll("home")}>Home</Nav.Link>
          <Nav.Link onClick={() => handleScroll("about")}>About Me</Nav.Link>
          <Nav.Link onClick={() => handleScroll("projects")}>Projects</Nav.Link>
          <Nav.Link onClick={() => handleScroll("timeline")}>Timeline</Nav.Link>
          <Button className="contact-nav" onClick={onContactClick}>
            Contact Me
          </Button>
        </Nav>
      </div>

      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
