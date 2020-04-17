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
        >
          {/* <Navbar.Brand href='#home'>Jordan Smith</Navbar.Brand> */}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='#portfolio'>
                <i className='far fa-folder-open' />
              </Nav.Link>
              <Nav.Link href='#'>
                <i className='far fa-address-card' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarComp;
