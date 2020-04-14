import React, { Fragment } from "react";
import StickyFooter from "../Footer/StickyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "../Navbar/Navbar";
import JumbotronComp from "../Jumbotron/Jumbotron";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBarComp />
        <JumbotronComp />

        <StickyFooter />
      </Fragment>
    );
  }
}

export default App;
