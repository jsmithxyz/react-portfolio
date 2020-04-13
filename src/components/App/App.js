import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import StickyFooter from "../Footer/StickyFooter";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth='sm' />
        <StickyFooter />
      </Fragment>
    );
  }
}

export default App;
