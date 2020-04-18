import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./jumbotron.css";

class JumbotronComp extends React.Component {
  render() {
    return (
      <Jumbotron className='jumbo' fluid>
        <Container>
          <Row>
            <Col sm={12}>
              <p className='titleLead fadeInDown animated'></p>
              <h1 className='nameLead fadeInUp animated'>Jordan Smith</h1>
              <p className='titleLead fadeInDown animated waves-effect'>
                .web developer.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronComp;
