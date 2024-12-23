import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        {/* Social Links Section */}
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ericmah123"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/eric-mah2/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
   
 
          </ul>
        </Col>

        {/* Back to Top Section */}
        <Col md="6" className="footer-back-to-top text-center">
          <a href="#home" style={{ color: "white", fontSize: "1.5rem" }}>
            <AiOutlineArrowUp /> {/* Icon for "Back to Top" */}
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
