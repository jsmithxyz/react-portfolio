import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavbarComp extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>Jordan Smith</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='#deets'>
                <i class='far fa-folder-open' />
              </Nav.Link>
              <Nav.Link href='#memes'>
                <i class='far fa-address-card' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarComp;
