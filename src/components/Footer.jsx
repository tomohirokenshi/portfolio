import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { href: "https://github.com/tomohirokenshi/", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/timothy-kenneth-dantic/",
    icon: <FaLinkedin />,
  },
  { href: "https://www.facebook.com/timk3ndan/", icon: <FaFacebook /> },
  { href: "https://www.instagram.com/kenichiyawaa/", icon: <FaInstagram /> },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
];

const LeftFooter = () => (
  <Col
    xs={12}
    md={6}
    className="text-column text-center text-md-start mb-3 mb-md-0"
  >
    <p className="brand-name lead">tomohiro kenshi</p>
    <p className="contact-group">
      <span className="contact-location">
        Address: San Juan, Kalayaan, Laguna, Philippines, 4015
      </span>
      <br />
      <div className="contact-links">
        <a href="tel:+639934869567" className="contact">
          +63 993 486 9567
        </a>
        {" | "}
        <a href="mailto:timothykennethdantic@gmail.com" className="contact">
          timothykennethdantic@gmail.com
        </a>
      </div>
    </p>
    <div className="social-links">
      {socialLinks.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social me-3"
        >
          {icon}
        </a>
      ))}
    </div>
  </Col>
);

const RightFooter = () => (
  <Col xs={12} md={6} className="logo-column text-center">
    <img
      src="./images/KenshiCal.png"
      alt="Logo"
      className="footer-logo img-fluid"
    />
  </Col>
);

const BottomFooter = () => (
  <Col className="text-nav text-center mt-3">
    <div className="footer-links">
      {navLinks.map(({ href, label }, index) => (
        <a key={index} href={href}>
          {label}
        </a>
      ))}
    </div>
    <p className="copyright-text small mb-1">
      © 2024 tomohiro kenshi | All Rights Reserved
    </p>
  </Col>
);

const Footer = () => (
  <Container fluid className="footer-section">
    <Row className="footer-container align-items-center">
      <LeftFooter />
      <RightFooter />
    </Row>
    <Row className="bottom-row">
      <BottomFooter />
    </Row>
  </Container>
);

export default Footer;
