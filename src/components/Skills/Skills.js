import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <Row>
          <Col xs={6} m={6} lg={6}>
            Hell
          </Col>
          <Col xs={6} m={6} lg={6}>
            Now
          </Col>
        </Row>
        <Row>
          <Col xs={6} m={6} lg={6}>
            yes
          </Col>
          <Col xs={6} m={6} lg={6}>
            baby
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skills;
