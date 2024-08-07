import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sevahub from "../../Assets/Projects/sevahub.png";
import eduglow from "../../Assets/Projects/eduglow.png";
import rigor from "../../Assets/Projects/rigor.png";
import robotics from "../../Assets/Projects/robotics.webp";
import personal from "../../Assets/Projects/personal.png";
import ecohub from "../../Assets/Projects/ecohub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={ecohub}
              isBlog={false}
              title="EcoHub"
              description="EcoHub provides eco-friendly activities and rewards users with EcoCoins for their participation and positive environmental impact."
              ghLink="https://github.com/Harsh-Is-Coding/terrahacks"
              demoLink="https://devpost.com/software/ecohub-ry6n8o"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sevahub}
              isBlog={false}
              title="SevaHub"
              description="Seva Hub focuses on providing volunteering access to more people and connecting coordinators and volunteers with each other"
              ghLink="https://devpost.com/software/seva-hub"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduglow}
              isBlog={false}
              title="EduGlow"
              description="EduGlow is an innovative platform that transforms text prompts into interactive Google Slides and flashcards"
              ghLink="https://github.com/tsangh5/EduGlow"
              demoLink="https://devpost.com/software/eduglow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rigor}
              isBlog={false}
              title="Rigor"
              description="Track your calories, get custom workout plans, and view progress. Rigor is the all-in-one fitness application that you need to achieve your dream self"
              ghLink="https://github.com/SachinVedGupta/Rigor"
              demoLink="https://sachinvedgupta.github.io/Rigor/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Vex Robotics"
              description="Developed a Vex Robotics robot which included a automous mode and a driver controlled mode"
              ghLink="https://github.com/JayPrograms/Robot-Routing-Program"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Personal Website"
              description="This is my personal website that I created using React"
              ghLink="https://github.com/Harsh-Is-Coding/portfolio"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
