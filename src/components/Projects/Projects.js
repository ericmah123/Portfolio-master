import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import JobExperienceSection from "./JobExperienceSection"; // Import the new component
import emploi from "../../Assets/Projects/emploi.png";
import fit from "../../Assets/Projects/fit.png";
import mma from "../../Assets/Projects/mma.png";
import quick from "../../Assets/Projects/quick.png";
import rizztagram from "../../Assets/Projects/rizztagram.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Projects Section */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emploi}
              isBlog={false}
              title="EmploiF1rst"
              description="A job application and management system that streamlines job posting, application tracking, and candidate communication, built using React.js, Node.js, and MySQL."
              ghLink="https://github.com/UAlberta-CMPUT401/f24project-EmploiF1rst"
              demoLink="https://www.emploif1rst.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit}
              isBlog={false}
              title="Fit Planner"
              description="An AI-powered fitness planning app that creates personalized workout plans tailored to your goals. Developed using HTML, CSS, and JavaScript for the frontend, with a robust Django backend for data management and AI integration."
              ghLink="https://github.com/josephhdu/Fit-Planner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mma}
              isBlog={false}
              title="MMA Predictor Model"
              description="A web application that analyzes mixed martial arts fight statistics and visualizes trends using D3.js and Flask. It processes large CSV files containing fighter stats and predicts the likely winner using a machine learning model. The frontend is built with Flask, HTML, and CSS, while the backend leverages Python for data processing and machine learning."
              ghLink="https://github.com/ericmah123/mma-predictor-model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quick}
              isBlog={false}
              title="QuickScanQuestPro"
              description="A task management tool designed to enhance productivity through a simple and intuitive interface, developed using Java and Android Studio for a seamless Android experience. Firebase is utilized for real-time data synchronization and secure cloud storage, enabling users to create, organize, and prioritize tasks effortlessly."
              ghLink="https://github.com/CMPUT301W24T29/QuickScanQuestPro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rizztagram}
              isBlog={false}
              title="Rizztagram"
              description="An interactive social media platform designed for sharing photos and fostering connections with friends. The platform leverages modern web technologies like HTML, CSS, and JavaScript, incorporates well-structured APIs for smooth functionality, and is fortified with advanced security measures to ensure user privacy and data protection. All powered by a backend server using Django."
              ghLink="https://github.com/uofa-cmput404/f24-project-cornflowerblue"
              demoLink="https://youtu.be/d6U3Hyix7g8?si=jFcQ7QcXdvLTMBwP"
            />
          </Col>
        </Row>
      </Container>

      {/* Job Experience Section */}
      <Container>
        <JobExperienceSection />
      </Container>
    </Container>
  );
}

export default Projects;
