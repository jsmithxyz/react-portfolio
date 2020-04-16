import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./jumbotron.css";

class JumbotronComp extends React.Component {
  render() {
    return (
      <Jumbotron className='jumbo' fluid>
        <Container>
          <h1 className='nameLead fadeInUp animated'>JORDAN SMITH</h1>
          <p className='titleLead fadeInDown animated'>.web developer.</p>
          {/* <Fab className='jumboFab' aria-label='add'>
            <AddIcon />
          </Fab> */}
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronComp;
