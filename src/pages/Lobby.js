import React from 'react'

import { Link } from 'react-router-dom'

// import LazyLoad from 'react-lazyload'

import {
  Container,
  Button,
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainView from './views/MainView'
import EmailSubmission from '../features/marketing/EmailSubmission'

import serialsBackground from '../assets/img/serials-background.png'

const Lobby = (props) => {
  return (
    <MainView>

      {/* Marketing Image */}
      {/*
        Build a lazy load cover so the image load doesn't flash
          and push content down
      */ }
      <div className='app-image' >
        <img alt='serials-team-background' src={serialsBackground} width="100%" loading="lazy" />
      </div>
      <br />
      <br />
      <br />

      {/* Theater Tour Before Showtime */}
      <h3>Tour The Online Theater</h3>
      <p>Get a sneak peak at the online experience<br />and see how we will be voting!</p>
      <Button
        tag={Link}
        to="/theater"
        >
        Tour Online Theater
        &nbsp;<FontAwesomeIcon icon="arrow-alt-circle-right" />
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Ticket Booth ;) Enter Theater Area */}

      {/*

      <Container>
        <h3>Get a Pizza. Grab a Beer.</h3>
        <Button
          style={{width: "50%"}}
          tag={Link}
          to="/theater"
          >
          Enter The Theater!
          &nbsp;<FontAwesomeIcon icon="arrow-alt-circle-right" />
        </Button>
      </Container>
      <br />
      <br />

      */}

      {/* Email Submission */}
      <Container>
        <EmailSubmission />
      </Container>
      <br />
      <br />
    </MainView>
  )
}

export default Lobby
