import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'

import {
  Container,
  Row,
  Col,
  Button,
  Spinner
} from 'reactstrap'

import {
  castVotes
} from './votingSlice'

const VotingPoll = ({videos}) => {
  const [votes, setVotes] = useState([])
  const [votesReady, setVotesReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const dispatch = useDispatch();

  const addSelection = (item) => setVotes([...votes, item])
  const removeSelection = (item) => setVotes(votes.filter(s => s !== item))

  const castVote = e => {
    if (e.target.checked) {
      addSelection(e.target.id)
      // Add 1 to length because state doesn't reflect added item yet
      votes.length === 2 && setVotesReady(true)
    } else if (!e.target.checked){
      removeSelection(e.target.id)
      votes.length === 3 && setVotesReady(false)
    }
  }

  const votingFeedback = (length) => {
      switch(length) {
        case 0:
          return <p>Pick your favorite three plays!</p>
        case 1:
          return <p>Great! Two more votes to go!</p>
        case 2:
          return <p>Almost there! Pick one more!</p>
        case 3:
          return <p>You're ready! Cast your vote!</p>
        default:
          return null
      }
  }

  const submitVotes = () => {
    setLoading(true)
    dispatch(castVotes(votes))
      .then(res => unwrapResult(res))
      .then(data => {
        setSubmitted(true)
        setLoading(false)
        console.log(data)
      })
      .catch(err => console.log('votes failed'))
  }

  return (
    <Container>
      {
        !submitted ?
          <React.Fragment>
            <h4>Select Your 3 Favorite Plays!</h4>
            <br />
            <Row>
              {
                !!videos && videos.map((vid, i) => (
                  <Col key={vid}>
                    <label htmlFor={vid} >#{i+1}</label>
                    <p>
                      <input
                        id={vid}
                        onChange={(e) => castVote(e)}
                        type="checkbox"
                        disabled={votesReady && votes.indexOf(`${vid}`) === -1}
                      />
                    </p>
                    &nbsp;
                    &nbsp;
                  </Col>
                ))
              }
            </Row>
            <div>
              { votingFeedback(votes.length) }
            </div>
            <Button
              onClick={submitVotes}
              disabled={!votesReady || loading}
              style={{
                cursor: !votesReady ? 'not-allowed' : 'pointer'
              }}
              >
              {
                !votesReady ?
                  'Cast Votes First'
                  : 'Vote!'
              }
              {loading && <span>&nbsp;&nbsp;<Spinner size='sm' /></span>}
            </Button>
          </React.Fragment>
          : <React.Fragment>
              <h3> Thanks for Voting! </h3>
              <p> Consider Donating! </p>
              <Button
                tag={'a'}
                href="http://theflea.org/join/"
                target="_blank"
                rel="noopener noreferrer"
                >Help Out The Flea</Button>
            </React.Fragment>
      }
    </Container>
  );
}

export default VotingPoll
