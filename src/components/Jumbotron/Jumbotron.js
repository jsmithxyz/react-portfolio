import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

class JumbotronComp extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Jordan Smith</h1>
          <p>.web developer.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronComp;
