import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

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
              <Link to='skills' smooth duration='1000'>
                <i className='fas fa-user-circle'></i>
              </Link>

              <Link to='portfolio' smooth duration='1000'>
                <i className='fas fa-folder-open'></i>
              </Link>
              <Link to='contact' smooth duration='1000'>
                <i className='fas fa-at'></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarComp;
