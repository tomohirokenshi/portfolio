import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import "./Button.css";

const AboutHeader = () => (
  <Row className="header-container">
    <Col xs={12}>
      <h1 className="about-me-header text-center text-md-start">About Me</h1>
    </Col>
  </Row>
);

const AboutImage = ({ src, alt }) => (
  <Col
    md={4}
    className="about-image-col d-flex justify-content-center align-items-center"
  >
    <Card.Img src={src} alt={alt} className="about-image" />
  </Col>
);

const AboutDescription = () => (
  <Col md={8} className="description-col">
    <Card.Body className="card-pad">
      <Card.Title className="about-description">
        <h1>Timothy Kenneth Dantic</h1>
      </Card.Title>
      <Card.Text className="about-description">
        <div>
          <blockquote>
            <em>
              "Yesterday's experiences make me stronger today. And most of those
              experiences are ones that I share with you." - Keqing
            </em>
          </blockquote>
        </div>

        <div>
          <p>
            Hi, I'm Tim. I recently graduated from{" "}
            <strong>Laguna State Polytechnic University</strong> with a
            Bachelor's degree in <strong>Computer Engineering</strong>. As a
            passionate Otaku, I enjoy immersing myself in the world of anime and
            gaming, and I'm deeply fascinated by Japanese culture. Recently,
            I've been particularly drawn to <strong>web development</strong>,
            especially within the <strong>MERN stack</strong>.
          </p>
        </div>

        <div>
          <p>
            I'm passionate about programming and have been teaching myself{" "}
            <strong>C++</strong> and <strong>Python</strong>. Through my college
            experience, I’ve enjoyed exploring the capabilities of
            microcontrollers like <strong>Arduino</strong> and{" "}
            <strong>Raspberry Pi</strong>, which have allowed me to work on
            exciting projects and develop practical skills.
          </p>
        </div>

        <a
          href="/Sample.pdf"
          className="resume-button"
          download="Timothy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-download"></i>
          Download Resume
        </a>
      </Card.Text>
    </Card.Body>
  </Col>
);

const AboutCard = () => (
  <Card className="about-card">
    <Row className="g-0 flex-column flex-md-row">
      <AboutImage src="/GradPic.webp" alt="Timothy Kenneth D. Dantic" />
      <AboutDescription />
    </Row>
  </Card>
);

const About = () => (
  <Container fluid className="about-section" id="about">
    <AboutHeader />
    <Row className="about-row justify-content-center gx-4">
      <Col xs={12} className="p-0">
        <AboutCard />
      </Col>
    </Row>
  </Container>
);

export default About;
