import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./Projects.css";
import "./Button.css";

const projectsData = [
  {
    id: 1,
    title: "From Humble Beginnings: Arithmetic Game",
    description:
      "In my freshman year, I embarked on my programming journey with a simple arithmetic game built in VB.net. This project served as a springboard, introducing me to the fundamental concepts of Object-Oriented Programming (OOP) – classes, objects, and methods. It provided me with hands-on experience in crafting user interfaces, designing forms, and developing a functional executable application. Through this project, I solidified my grasp of the interplay between logic and UI design, which significantly bolstered my confidence as a developer.",
    techUsed: ["VisualBasic .NET"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project1.png",
    techLogos: ["/VB_NET.png"],
    link: "https://github.com/tomohirokenshi/arithmetic-game",
  },
  {
    id: 2,
    title: "My First Steps Into Web Dev: Frontend UI Design",
    description:
      "This project marked my initial foray into front-end web development. I delved into the foundational technologies of HTML, CSS, and JavaScript to create a static website. I incorporated contemporary web design trends, including the parallax effect, carousels, and modals, to elevate the user experience. While the website lacked responsiveness, this project provided invaluable insights into crafting visually engaging and interactive web experiences. While CSS initially seemed daunting, the process of seeing your own work coming all together was incredibly rewarding.",
    techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project2.png",
    techLogos: ["/HTML.svg", "/CSS.png", "/JavaScript.png", "/Bootstrap.svg"],
    link: "https://github.com/tomohirokenshi/frontend-ui-design",
  },
  {
    id: 3,
    title: "Making a Contribution: Project Tracking Spreadsheet",
    description:
      "During my internship at The Blue Circle Philippines Holdings Corp., I developed an Excel spreadsheet to streamline project progress tracking. This project significantly enhanced my Excel proficiency, enabling me to effectively utilize advanced functions, VB scripting, and conditional formatting. Furthermore, it honed my logical thinking and problem-solving skills while simultaneously improving my typing speed and accuracy as an Excel encoder. This experience also provided valuable insights into the operational dynamics of a successful renewable energy producer.",
    techUsed: ["GoogleSheets"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project3.png",
    techLogos: ["/GoogleSheets.svg"],
    link: "https://github.com/tomohirokenshi/project-tracking-spreadsheet",
  },
  {
    id: 4,
    title:
      "A Rewarding Challenge: Raspberry Pi-Based Library Management System",
    description:
      "One of my most challenging yet rewarding college projects involved developing a Raspberry Pi-Based Library Management System to automate book borrowing and returning processes at the Library of the LSPU - SCC College of Engineering. Students could conveniently log in using RFID-tagged IDs and borrow books for designated periods. This project provided invaluable hands-on experience in backend development, database management, and hardware-software integration, establishing a strong foundation for my future pursuits in technology.",
    techUsed: ["Raspberry Pi", "Python", "SQLite"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project4.png",
    techLogos: ["/RaspberryPi.svg", "/Python.svg", "/SQLite.svg"],
    link: "https://github.com/tomohirokenshi/library-management-system",
  },
  {
    id: 5,
    title: "From Surplus to Solution: MCU-Based Mango Fruit Leather Machine",
    description:
      "My thesis project involved developing an Arduino-based control system for a mango fruit leather machine. This project sought to address the issue of surplus mangoes in Pila, Laguna, by automating the dehydration process and transforming them into a high-value product: fruit leather. This hands-on experience provided invaluable insights into embedded systems, encompassing microcontroller programming and sensor integration. These skills are highly transferable and directly applicable to a wide range of tech industries, including the burgeoning fields of IoT, automation, and robotics.",
    techUsed: ["Arduino", "C++"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project5.png",
    techLogos: ["/Arduino.svg", "/C++.svg"],
    link: "https://github.com/tomohirokenshi/mango-fruit-leather-machine",
  },
  {
    id: 6,
    title: "A Journey in Development: This Portfolio Website",
    description:
      "This portfolio serves as a testament to my journey and growth as a developer. It not only showcases my projects and skills but also reflects my learning journey in web development. Built with React and JavaScript, the site emphasizes responsive design and interactive user experiences. On the backend, I have been exploring Node.js with Express. Throughout the creation of this portfolio, I have also embraced Git for version control, a crucial skill for future collaborative endeavors. As I continue to learn and evolve as a developer, I plan to continually update the content of this portfolio.",
    techUsed: ["React", "JavaScript", "CSS", "Bootstrap", "NodeJS"],
    img: "https://tomohirokenshi.github.io/portfolio/images/Project6.png",
    techLogos: [
      "/React.svg",
      "/JavaScript.png",
      "/CSS.png",
      "/Bootstrap.svg",
      "/NodeJS.svg",
    ],
    link: "https://github.com/tomohirokenshi/portfolio",
  },
];

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 526);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid className="projects-section" id="projects">
      <Row className="header-container">
        <Col xs={12}>
          <h1 className="section-header text-center text-md-start">Projects</h1>
        </Col>
      </Row>

      {isSmallScreen ? (
        <Carousel className="projects-carousel" interval={null}>
          {projectsData.map((project, index) => (
            <Carousel.Item key={project.id}>
              <Card className="project-card">
                <Row
                  className={`g-0 ${
                    index % 2 === 0
                      ? "image-left flex-column flex-md-row"
                      : "image-right flex-column flex-md-row-reverse"
                  }`}
                >
                  <Col md={5} className="project-image-col">
                    <Card.Img
                      src={project.img}
                      className="project-image"
                      alt={project.title}
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body>
                      <Card.Title className="project-title">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-center">
                        <div className="tech-used">
                          {project.techLogos.map((logo, index) => (
                            <img
                              key={index}
                              src={logo}
                              alt={project.techUsed[index]}
                              className="tech-logo"
                              title={project.techUsed[index]}
                            />
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="see-more-link mt-2 mt-md-0"
                        >
                          See More
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Row className="projects-row justify-content-center gx-4">
          {projectsData.map((project) => (
            <Col key={project.id} xs={12} className="mb-4">
              <Card className="project-card">
                <Row
                  className={`g-0 ${
                    project.id % 2 === 0
                      ? "image-left flex-column flex-md-row"
                      : "image-right flex-column flex-md-row-reverse"
                  }`}
                >
                  <Col md={5} className="project-image-col">
                    <Card.Img
                      src={project.img}
                      className="project-image"
                      alt={project.title}
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body>
                      <Card.Title className="project-title">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-center">
                        <div className="tech-used">
                          {project.techLogos.map((logo, index) => (
                            <img
                              key={index}
                              src={logo}
                              alt={project.techUsed[index]}
                              className="tech-logo"
                              title={project.techUsed[index]}
                            />
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="see-more-link mt-2 mt-md-0"
                        >
                          See More
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Projects;
