import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/chill-guy-chill.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center"> {/* Align the items vertically */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
          
           
              I have developed a key interest in{" "}
              <b className="purple">machine learning</b>,{" "}
              <b className="purple">web development</b>,{" "}
              <b className="purple">data analysis</b>, and working to{" "}
              <b className="purple">sell software solutions.</b>
              <br />
              <br />
              My passion lies in exploring how cutting-edge technologies can
              solve real-world problems. In the field of machine learning, I am
              particularly drawn to developing intelligent systems that can
              process large datasets and provide meaningful insights. I enjoy
              experimenting with algorithms and building predictive models that
              deliver impactful results.
              <br />
              <br />
              In web development, I focus on creating scalable, user-friendly
              applications using <b className="purple">modern frameworks</b>{" "}
              like <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>, as well as robust backend
              technologies such as <b className="purple">Node.js</b>. I
              prioritize clean, maintainable code and strive to ensure
              exceptional user experiences.
              <br />
              <br />
              My work in data analysis revolves around transforming raw data
              into actionable insights that drive informed decision-making. I
              enjoy using tools like Python, SQL, and visualization libraries to
              uncover trends, patterns, and opportunities in complex datasets.
              <br />
              <br />
              Additionally, I am passionate about bridging the gap between
              technical expertise and business needs by working to{" "}
              <b className="purple">
                develop and sell innovative software solutions.
              </b>{" "}
              My goal is to deliver tools that streamline processes, solve pain
              points, and add tangible value for clients and users alike.
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
