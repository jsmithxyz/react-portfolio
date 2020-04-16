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
              <h1 className='nameLead fadeInUp animated'>JORDAN SMITH</h1>
              <p className='titleLead fadeInDown animated'>.web developer.</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronComp;
