import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Timeline.css";
import "./Button.css";

const WrapUp = ({ onContactClick }) => (
  <div className="WrapCTA">
    <img
      src="./images/Handshake.png"
      alt="CTA-Image"
      className="cta-image mb-3"
    />
    <h2 className="cta-lead">Let’s Make a Connection</h2>
    <p className="cta-text">
      <em>
        Looking for someone who’s dedicated, resourceful, and eager to learn?
        I’m just an email away. Let’s start a conversation.
      </em>
    </p>
    <Button className="cta-button" onClick={onContactClick}>
      Get in Touch
    </Button>
  </div>
);

const Education = ({ onContactClick }) => (
  <Col md={6} className="column mb-4">
    <header className="text-center text-md-start">
      <h1 className="timeline-header ">Education</h1>
    </header>
    <div className="contents">
      <Card className="cards mb-3">
        <Card.Body>
          <h3>2024</h3>
          <h2>Bachelor's Degree</h2>
          <p>
            <strong>
              Laguna State Polytechnic University | Sta. Cruz, Laguna
            </strong>{" "}
            <br />
            Bachelor of Science in Computer Engineering <br />
            <br />
            <em>Awards and Recognition</em>
            <ul className="mb-0">
              <li>BSCpE Proficiency Award</li>
              <li>Iskolar ng Laguna</li>
            </ul>
          </p>
        </Card.Body>
      </Card>
      <Card className="cards mb-3">
        <Card.Body>
          <h3>2020</h3>
          <h2>Secondary Education (SHS)</h2>
          <p>
            <strong>Kapayapaan Integrated School | Calamba City, Laguna</strong>{" "}
            <br />
            Science, Technology, Engineering and Mathematics <br />
            <br />
            <em>Awards and Recognition</em>
            <ul className="mb-0">
              <li>Academic Excellence Award with Honors</li>
              <li>Excellence in Research Innovation</li>
            </ul>
          </p>
        </Card.Body>
      </Card>
      <Card className="cards mb-3">
        <Card.Body>
          <h3>2018</h3>
          <h2>Secondary Education (JHS)</h2>
          <p>
            <strong>Kapayapaan Integrated School | Calamba City, Laguna</strong>{" "}
          </p>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body>
          <h3>2014</h3>
          <h2>Primary Education</h2>
          <p>
            <strong>San Ramon Elementary School | Calamba City, Laguna</strong>{" "}
          </p>
        </Card.Body>
      </Card>
    </div>
    <div className="cta-section1 text-center d-none d-md-block">
      <WrapUp onContactClick={onContactClick} />
    </div>
  </Col>
);

const Experience = ({ onContactClick }) => (
  <Col md={6} className="column mb-4">
    <header className="text-center text-md-start">
      <h1 className="timeline-header ">Experience</h1>
    </header>
    <div className="contents">
      <Card className="cards mb-3">
        <Card.Body>
          <h3>2024</h3>
          <h2>
            General Affairs & IT Support
            <br />
            (College Internship)
          </h2>
          <p>
            <strong>
              The Blue Circle Philippines Holdings Corp. | Kalayaan, Laguna
            </strong>{" "}
            <br />
            <ul className="mb-0">
              <li>
                Refined communication, teamwork, and leadership skills by
                collaborating effectively with diverse teams, adapting to
                dynamic work environments.
              </li>
              <li>
                Developed advanced Excel skills for data analysis and reporting,
                including conditional formatting, complex formulas, and VBA
                scripting, enhancing logical thinking and problem-solving
                capabilities.
              </li>
              <li>
                Improved organizational and management skills by overseeing
                document and data management tasks.
              </li>
              <li>
                Gained hands-on technical experience by troubleshooting IT
                devices, and network systems, deepening knowledge in hardware
                troubleshooting and system diagnostics.
              </li>
              <li>
                Strengthened understanding of engineering principles and
                renewable energy systems, applying technical knowledge to
                real-world scenarios.
              </li>
            </ul>
          </p>
        </Card.Body>
      </Card>
      <Card className="cards mb-3">
        <Card.Body>
          <h3>2020</h3>
          <h2>
            Office Assistant
            <br /> (K12 Work Immersion)
          </h2>
          <p>
            <strong>Calamba City Hall - IIPESO | Calamba City, Laguna</strong>{" "}
            <br />
            <ul className="mb-0">
              <li>
                Utilized strong organizational and attention to detail skills to
                ensure accurate and efficient document processing.
              </li>
              <li>
                Demonstrated strong communication and interpersonal skills by
                effectively collaborating with diverse teams and providing
                exceptional customer service to Calambeños, creating a positive
                and welcoming environment.
              </li>
              <li>
                Demonstrated creativity and design skills by taking initiative
                to design and content editing of SPES orientation stubs,
                slideshow presentations, and IDs.
              </li>
            </ul>
          </p>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body>
          <h3>2018 - 2020</h3>
          <h2>Lighting and Sound Assistant</h2>
          <p>
            <strong>Oneida Lights and Sounds | Calamba City, Laguna</strong>{" "}
            <br />
            <ul className="mb-0">
              <li>
                Leveraged technical expertise to coordinate and execute 10+
                events, optimizing lighting and sound services.
              </li>
              <li>
                Demonstrated strong analytical skills to identify and resolve
                technical challenges, ensuring seamless event execution.
              </li>
              <li>
                Utilized problem-solving abilities to troubleshoot and maintain
                a diverse range of audio-visual equipment.
              </li>
              <li>
                Implemented efficient inventory management systems to streamline
                workflows and improve operational efficiency.
              </li>
            </ul>
          </p>
        </Card.Body>
      </Card>
    </div>
    <div className="cta-section2 text-center mt-5 d-block d-md-none">
      <WrapUp onContactClick={onContactClick} />
    </div>
  </Col>
);

const Timeline = ({ onContactClick }) => (
  <Container fluid className="timeline-section" id="timeline">
    <Row className="content-container">
      <Education onContactClick={onContactClick} />
      <Experience onContactClick={onContactClick} />
    </Row>
  </Container>
);

export default Timeline;
