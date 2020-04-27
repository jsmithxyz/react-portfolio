import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import projects from "../../myprojects";
import "./Projects.css";

function Projects() {
  const { project1, project2, project3, project4 } = projects;
  function handleClickApp(url) {
    window.open(url);
  }
  function handleClickRepo(url) {
    window.open(url);
  }
  return (
    <Container>
      <Row className='projectRow' id='projects'>
        <Col xs={12} md={6} lg={6}>
          <div class='img__wrap'>
            <img
              className='image'
              src={project1.image}
              alt='Philly Auto Emporium'
            />
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h1 className='project-name'>
            <strong>{project1.name}</strong>
          </h1>
          <p className='description'>{project1.desc}</p>
          <div className='button-group'>
            <Button
              className='img-view-app'
              onClick={() => handleClickApp(project1.website)}
            >
              View App
            </Button>
            <Button
              className='img-view-app'
              onClick={() => handleClickRepo(project1.githubURL)}
            >
              View Repo
            </Button>
          </div>
        </Col>
      </Row>
      <hr id='projectBreaks'></hr>
      <Row className='projectRow'>
        <Col xs={12} md={6} lg={6}>
          <img className='image' src={project2.image} alt='Pooch Quest' />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h1 className='project-name'>
            <strong>{project2.name}</strong>
          </h1>
          <p className='description'>{project2.desc}</p>
          <div className='button-group'>
            <Button
              className='img-view-app'
              onClick={() => handleClickApp(project2.website)}
            >
              View App
            </Button>
            <Button
              className='img-view-app'
              onClick={() => handleClickRepo(project2.githubURL)}
            >
              View Repo
            </Button>
          </div>
        </Col>
      </Row>
      <hr id='projectBreaks'></hr>
      <Row className='projectRow'>
        <Col xs={12} md={6} lg={6}>
          <img className='image' src={project3.image} alt='Godzilla Quiz' />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h1 className='project-name'>
            <strong>{project3.name}</strong>
          </h1>
          <p className='description'>{project3.desc}</p>
          <div className='button-group'>
            <Button
              className='img-view-app'
              onClick={() => handleClickApp(project3.website)}
            >
              View App
            </Button>
            <Button
              className='img-view-app'
              onClick={() => handleClickRepo(project3.githubURL)}
            >
              View Repo
            </Button>
          </div>
        </Col>
      </Row>
      <hr id='projectBreaks'></hr>
      <Row className='projectRow'>
        <Col xs={12} md={6} lg={6}>
          <img className='image' src={project4.image} alt='Eat-Da-Burger' />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h1 className='project-name'>
            <strong>{project4.name}</strong>
          </h1>
          <p className='description'>{project4.desc}</p>
          <div className='button-group'>
            <Button
              className='img-view-app'
              onClick={() => handleClickApp(project4.website)}
            >
              View App
            </Button>
            <Button
              className='img-view-app'
              onClick={() => handleClickRepo(project4.githubURL)}
            >
              View Repo
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
