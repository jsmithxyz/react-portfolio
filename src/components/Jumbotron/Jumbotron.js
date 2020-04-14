import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class JumbotronComp extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Jordan Smith</h1>
          <p>.web developer.</p>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronComp;
