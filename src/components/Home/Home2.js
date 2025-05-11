import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/chill-guy-chill.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love taking messy, complicated data and turning it into{" "}
              <b className="purple">clear, actionable insights</b> that help businesses work smarter.
              <br />
              <br />
              My main focus is using{" "}
              <b className="purple">data analysis</b> and{" "}
              <b className="purple">software development</b> to solve real-world problems. 
              Whether it is helping a team spot opportunities they could not see before, 
              streamlining clunky workflows, or building tools that make everyday tasks easier, 
              I am excited about creating{" "}
              <b className="purple">practical solutions</b> that actually make a difference.
              <br />
              <br />
              Most of my experience is rooted in data analysis, where I work with{" "}
              <b className="purple">Python</b>,{" "}
              <b className="purple">SQL</b>, and visualization libraries to dig into complex datasets, 
              identify trends, and uncover opportunities for better decision-making. I enjoy the process 
              of not just analyzing data but{" "}
              <b className="purple">telling the story behind it</b>, connecting the dots so people 
              can act on what the data is really saying.
              <br />
              <br />
              On the technical side, I enjoy web development. I build clean, user-friendly applications using 
              frameworks such as{" "}
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>, supported by backend development with{" "}
              <b className="purple">Node.js</b>. I always aim to keep the experience simple and intuitive, 
              allowing people to focus on their tasks without being slowed down by the technology.
              <br />
              <br />
              Recently, I have been exploring{" "}
              <b className="purple">machine learning</b> to understand how intelligent systems 
              can add another layer of insight to data-driven solutions and support{" "}
              <b className="purple">predictive decision-making</b>.
              <br />
              <br />
              At the end of the day, I am driven by the idea of using{" "}
              <b className="purple">technology to make work a little easier</b>, a little smarter, 
              and a lot more impactful.
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center"
          >
            <img src={myImg} alt="avatar" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
