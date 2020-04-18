import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <Fragment>
        <Row className='contact-page' id='contact'>
          <Col xs={12} m={6} lg={6}>
            <p className='footer-text'>
              Let's Get in Touch!
              <hr id='contact-break'></hr>
            </p>
            <p className='contact-subtext'>
              Need to contact me? Feel free to reach out via phone or e-mail.
            </p>
            <p className='footer-text'>
              <i className='fas fa-phone-alt'></i> 570.294.1517{" "}
            </p>
            <p className='footer-text'>
              <i className='far fa-envelope'></i>{" "}
              <a href='mailto:jordansmith3813@gmail.com'>
                jordansmith3813@gmail.com{" "}
              </a>
            </p>
          </Col>
          <Col xs={12} m={6} lg={6}>
            <p className='footer-text'>Connect with Me!</p>
            <hr id='contact-break'></hr>
            <Row className='contact-align'>
              <a
                className='footer-text'
                href='https://www.linkedin.com/in/jordan-smith-47126a118/'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </Row>
            <Row className='contact-align'>
              <a className='footer-text' href='https://github.com/jsmithxyz'>
                <i className='fab fa-github'></i>
              </a>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Contact;
