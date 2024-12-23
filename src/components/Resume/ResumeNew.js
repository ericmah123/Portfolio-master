import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImage from "../../Assets/ResumeImage.png"; // Your resume image file
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/Resume Newest.pdf"; // Your resume PDF file

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Display Resume Image */}
        <Row
          className="resume"
          style={{
            justifyContent: "center",
            marginBottom: "20px",
            overflow: "hidden", // Prevents overflow if the image is large
          }}
        >
          <img
            src={resumeImage}
            alt="Resume"
            style={{
              width: "80%", // Adjusted width for better scaling
              height: "auto",
              maxWidth: "900px", // Prevents the image from being too wide
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for aesthetics
            }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
