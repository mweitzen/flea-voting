import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoBlack from '../assets/img/logo-black.png'

const Footer = (props) => {
  return (
    <Container fluid className="app-footer" >

      {/* Logo and Flea Link */}
      <Row>
        <Col>
          <a
            href="http://theflea.org/"
            className="hvr-grow"
            >
            <img
              src={logoBlack}
              alt="Logo"
              height="75"
              width="75"
              />
          </a>
        </Col>
      </Row>

      <Container>
        {/* Social Icons */}
        <Row className="app-footer-social">
          <Col xs='6' md='3' >
            <a
              href="https://www.facebook.com/thefleatheater"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-grow"
              >
              <FontAwesomeIcon
                icon={{prefix: 'fab', iconName: 'facebook-square'}}
                style={{color: '#8781bd'}}
                />
            </a>
          </Col>
          <Col xs='6' md='3' >
            <a
              href="https://www.instagram.com/thefleatheater/"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-grow"
              >
              <FontAwesomeIcon
                icon={{prefix: 'fab', iconName: 'instagram-square'}}
                style={{color: '#96cb64'}}
                />
            </a>
          </Col>
          <Col xs='6' md='3' >
            <a
              href="http://twitter.com/thefleatheater"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-grow"
              >
              <FontAwesomeIcon
                icon={{prefix: 'fab', iconName: 'twitter-square'}}
                style={{color: '#fbb040'}}
                />
            </a>
          </Col>
          <Col xs='6' md='3' >
            <a
              href="https://www.youtube.com/user/thefleatheater"
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-grow"
              >
              <FontAwesomeIcon
                icon={{prefix: 'fab', iconName: 'youtube'}}
                style={{color: '#8781bd'}}
                />
            </a>
          </Col>
        </Row>

        {/* Flea Info */}
        <Row className="app-footer-info">
          <Col xs="12" md="3">
            <p>The Flea Theater</p>
          </Col>
          <Col xs="12" md="3">
            <p>
              <a
                href="tel:212-226-0051"
                className="hvr-grow"
                >
                (212) 226-0051
              </a>
            </p>
          </Col>
          <Col xs="12" md="3">
            <p>20 Thomas Street</p>
          </Col>
          <Col xs="12" md="3">
            <p>New York, NY 10007</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer
