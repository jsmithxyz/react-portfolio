import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import projects from "../../myprojects";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    console.log(projects);
    const { project1, project2 } = projects;
    return (
      <Container>
        <Row className='projectRow'>
          <Col xs={12} md={6} lg={6}>
            <img
              className='image'
              src={project1.image}
              alt='Philly Auto Emporium'
            />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <h1 className='project-name'>
              <strong>{project1.name}</strong>
            </h1>
            <p className='description'>{project1.desc}</p>
          </Col>
        </Row>
        <hr id='projectBreaks'></hr>
        <Row>
          <Col xs={4} md={6} lg={6}>
            <img
              className='image'
              src={project2.image}
              alt='Philly Auto Emporium'
            />
          </Col>
          <Col xs={8} md={6} lg={6}>
            <h1 className='project-name'>
              <strong>{project2.name}</strong>
            </h1>
            <p className='description'>{project2.desc}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
