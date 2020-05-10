import React from "react";
import { Row, Col } from "react-bootstrap";
import handleClick from "../../utils/helper";
import pdf from "./JordanSmith-TechResume.pdf";
import "./Skills.css";

function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='skillsContainerHeader'>.about.</div>
      <p className='skillsContainerSubHeader'>
        Here's more on who I am, what I've learned, and where I want to go.
      </p>
      <hr id='header-break'></hr>
      <Row className='skills-row'>
        <Col className='snippet' xs={6} m={3} lg={3}>
          <div className='sub-snippet-card'>
            <i className='fas fa-address-card icons'></i>
          </div>
          <p className='skills-desc'>
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
          <p className='skills-desc'>
            I have tried and tested experience with HTML5, CSS3, JavaScript,
            jQuery, Node, React, Express, Bootstrap, Foundation, and
            Materialize. I'm currently teaching myself Angular.js and expanding
            my React.js knowledge!{" "}
          </p>
        </Col>
        <Col className='snippet' xs={6} m={3} lg={3}>
          <div className='sub-snippet-card'>
            <i className='fas fa-database icons'></i>
          </div>
          <p className='skills-desc'>
            Trained in using MongoDB, MySQL, and Firebase. Database Management
            remains very interesting to me, and I'm looking to continue
            expanding my knowledge in this area!{" "}
          </p>
        </Col>
        <Col className='snippet' xs={6} m={3} lg={3}>
          <div className='sub-snippet-card'>
            <i class='fas fa-user-tie icons'></i>
          </div>
          <p className='skills-desc'>
            Utilizing a degree in Mathematics, I've spent 8+ years in the
            Sales/Marketing realm. Specifically, I spent 4 years in IT
            Marketing, managing accounts for Google, Oracle, HP, Veritas, Veeam,
            Splunk, Ultimate Software, and more!
          </p>
        </Col>
      </Row>
      <p className='skills-desc-links'>
        Make sure to inspect my code on{" "}
        <mark onClick={() => handleClick("https://github.com/jsmithxyz")}>
          GITHUB
        </mark>
        , follow me on
        <mark
          onClick={() =>
            handleClick("https://www.linkedin.com/in/jordan-smith-47126a118/")
          }
        >
          LINKEDIN
        </mark>
        , and download my{" "}
        <a href={pdf}>
          <mark>RÉSUMÉ</mark>
        </a>
      </p>
    </div>
  );
}

export default Skills;
