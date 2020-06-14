import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';

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

const Countdown = (props) => {
  const [timer, setTimer] = useState({})

  // This needs dynamincally imported
  const today = new Date()
  const thisMonth = today.getMonth()
  const nextMonth = thisMonth + 1
  const thisYear = today.getFullYear()

  const serialsShowtimeString = `${nextMonth}/1/${thisYear} 20:00:00 GMT-0400`
  console.log(serialsShowtimeString)
  const serialsShowtime = new Date(serialsShowtimeString)
  const countdown = timeUntil(serialsShowtime)

  useEffect(() => {
    setTimeout(() => {
      setTimer(countdown)
    }, 1000)
  })

  return (
    <Container>
      <h1>Countdown to Showtime:</h1>
      <h4
        style={{textTransform: 'uppercase'}}>
        <span
          style={{ fontSize: '56px', fontWeight: 'bolder'}}>{timer.day}</span> days &nbsp; &nbsp;
        <span
          style={{ fontSize: '56px', fontWeight: 'bolder'}}>{timer.hr}</span> hours &nbsp; &nbsp;
        <span
          style={{ fontSize: '56px', fontWeight: 'bolder'}}>{timer.min}</span> minutes &nbsp; &nbsp;
        <span
          style={{ fontSize: '56px', fontWeight: 'bolder'}}>{timer.sec}</span> seconds &nbsp; &nbsp;
      </h4>
      <br />
      <Button
        style={{width: "50%"}}
        tag={Link}
        to="/theater"
        >
        Get a Sneak Peak!
      </Button>
      <br />
      <br />
    </Container>
  )
}

export default Countdown
