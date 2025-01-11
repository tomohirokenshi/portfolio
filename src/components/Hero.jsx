import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "./Hero.css";
import "./Button.css";

const HeroImage = () => (
  <Col
    xs={12}
    md={5}
    className="image-column text-center align-items-center text-md-right d-flex flex-column align-items-md-end order-1 order-md-2"
  >
    <div className="neon-border">
      <div className="pp-container">
        <img
          src="./images/Profile.png"
          alt="Timothy Kenneth Dantic"
          className="prof-picture"
        />
        <div className="just-border"></div>
      </div>
      <div className="romaji d-md-block">
        <img src="./images/JapName.png" alt="Tomohiro Kenshi" />
      </div>
    </div>
  </Col>
);

const HeroDescription = ({ onContactClick }) => (
  <Col
    xs={12}
    md={7}
    className="text-column text-center text-md-start order-2 order-md-1"
  >
    <div className="hero-text">
      <h1>
        <span className="hello-text">Hi, I'm</span>
        <span className="name-text">Timothy Kenneth Dantic</span>
      </h1>
      <h2 className="hero-subtext">Programmer / Junior Developer</h2>
      <p className="short-description lead">
        As I prepare for my career in tech, I've been dedicating my time to
        learning web development and expanding my programming skills. I’m
        currently looking for an entry-level role where I can contribute and
        grow as a junior developer.
      </p>
    </div>
    <div className="contact-container">
      <Button className="contact-button" onClick={onContactClick}>
        <TfiEmail className="contact-icon" />
        Contact Me
      </Button>
      <a
        href="https://github.com/tomohirokenshi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/timothy-kenneth-dantic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-icon" />
      </a>
      <a
        href="https://www.facebook.com/timk3ndan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/kenichiyawaa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="social-icon" />
      </a>
    </div>
  </Col>
);

const Hero = ({ onContactClick }) => (
  <Container fluid className="hero-section" id="home">
    <Row className="hero-container align-items-center">
      <HeroDescription onContactClick={onContactClick} />
      <HeroImage />
    </Row>
  </Container>
);

export default Hero;
