import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

class NavbarComp extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar
          className='navbar'
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          fixed='top'
        >
          {/* <Navbar.Brand href='#home'>Jordan Smith</Navbar.Brand> */}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='#skills'>
                <i className='fas fa-user-circle'></i>
              </Nav.Link>

              <Nav.Link href='#projects'>
                <i className='fas fa-folder-open'></i>
              </Nav.Link>
              <Nav.Link href='#contact'>
                <i className='fas fa-at'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarComp;
