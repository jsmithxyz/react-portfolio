import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../myprojects";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    console.log(projects);
    const { project1, project2 } = projects;
    return (
      <Container>
        <Row className='projectRow'>
          <Col xs={4} md={6} lg={6}>
            <img
              className='image'
              src={project1.image}
              alt='Philly Auto Emporium'
            />
          </Col>
          <Col xs={8} md={6} lg={6}>
            <h1>
              <strong>{project1.name}</strong>
            </h1>
            <h2>{project1.desc}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={6} lg={6}>
            <img
              className='image'
              src={project2.image}
              alt='Philly Auto Emporium'
            />
          </Col>
          <Col xs={8} md={6} lg={6}>
            <h1>
              <strong>{project2.name}</strong>
            </h1>
            <h2>{project2.desc}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
