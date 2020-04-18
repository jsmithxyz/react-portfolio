import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <p className='skillsContainerHeader'>.about.</p>
        <p className='skillsContainerSubHeader'>
          Here's more on who I am, what I've learned, and where I want to go.
        </p>
        <hr id='header-break'></hr>
        <Row className='skills-row'>
          <Col className='snippet' xs={6} m={3} lg={3}>
            <div className='sub-snippet-card'>
              <i className='fas fa-address-card icons'></i>
            </div>
            <p>
              Certified Full-Stack Web Developer currently residing in
              Philadelphia. I love building things with code, and have a passion
              for problem solving. When I'm not coding, I enjoy playing music,
              reading books, and watching obscure foreign films!{" "}
            </p>
          </Col>
          <Col className='snippet' xs={6} m={3} lg={3}>
            <div className='sub-snippet-card'>
              <i className='fas fa-code icons'></i>
            </div>
            <p>
              I have tried and tested experience with HTML5, CSS3, JavaScript,
              jQuery, Node, React, Express, Bootstrap, Foundation, and
              Materialize. I'm currently teaching myself Angular.js and
              expanding my React.js knowledge!{" "}
            </p>
          </Col>
          <Col className='snippet' xs={6} m={3} lg={3}>
            <div className='sub-snippet-card'>
              <i className='fas fa-database icons'></i>
            </div>
            <p>
              Trained in using MongoDB, MySQL, and Firebase. Database Management
              remains very interesting to me, and I'm looking to continue
              expanding my knowledge in this area!{" "}
            </p>
          </Col>
          <Col className='snippet' xs={6} m={3} lg={3}>
            <div className='sub-snippet-card'>
              <i class='fas fa-user-tie icons'></i>
            </div>
            <p>
              Utilizing a degree in Mathematics, I've spent 8+ years in the
              Sales/Marketing realm. Specifically, I spent 3 years in IT
              Marketing, managing accounts for Google, Oracle, HP, Veritas,
              Veeam, Splunk, Ultimate Software, and more!
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skills;
