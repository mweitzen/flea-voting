import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';

import styles from './Countdown.module.css'

const timeUntil = futureTime => {
  const difference = new Date(futureTime) - new Date();
  const time = {
    day: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hr: Math.floor(difference / (1000 * 60 * 60) % 24),
    min: Math.floor((difference / 1000 / 60) % 60),
    sec: Math.floor((difference / 1000 ) % 60)
  }
  return time
}

const CountdownNav = (props) => {
  const [timer, setTimer] = useState({})

  // This needs dynamincally imported
  const today = new Date()
  const thisMonth = today.getMonth()
  const nextMonth = thisMonth + 2 // because date arrays are stupid
  const thisYear = today.getFullYear()

  const serialsShowtimeString = `${nextMonth}/1/${thisYear} 20:00:00 GMT-0400`
  const serialsShowtime = new Date(serialsShowtimeString)
  const countdown = timeUntil(serialsShowtime)

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      setTimer(countdown)
    }, 1000)
    return () => clearTimeout(timerFunc)
  })

  return (
    <Container className={styles.countdownNav}>
      <p><strong>COUNTDOWN TO SERIALS:</strong></p>
      <Row className={styles.countdownDivNav}>
        <Col>
          <p>
            <span className={styles.timeNav}>{timer.day}</span>
            <br/>
            <small>Days</small>
          </p>
        </Col>
        <Col>
          <p>
            <span className={styles.timeNav}>{timer.hr}</span>
            <br/>
            <small>Hours</small>
          </p>
        </Col>
        <Col>
          <p>
            <span className={styles.timeNav}>{timer.min}</span>
            <br/>
            <small>Minutes</small>
          </p>
        </Col>
        <Col>
          <p>
            <span className={styles.timeNav}>{timer.sec}</span>
            <br/>
            <small>Seconds</small>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default CountdownNav
