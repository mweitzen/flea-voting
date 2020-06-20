import React, { useState } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux';

import {
  Container,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Input,
  Spinner
} from 'reactstrap'

import styles from './EmailSubmission.module.css';

import { submitEmail } from './marketingSlice'

const EmailSubmission = (props) => {
  const [ emailForm, setEmail ] = useState('')
  const [ emailError, setError ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ submitted, setSubmitted ] = useState(false)

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!emailForm || emailForm === undefined || emailForm === "") {
      return setError(true)
    }
    setLoading(true)
    dispatch(submitEmail(emailForm))
      .then(res => unwrapResult(res))
      .then(data => {
        setLoading(false);
        setSubmitted(true);
        return console.log('We out here bitch')
      })
      .catch(err => {
        return console.log(err)
      })
  }

  return (
    <Container className={styles.emailForm} >
      {
        !submitted ?
          <Form id="emailForm" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit()
            }
          }>
            <h3>Want More Flea?</h3>

            <FormGroup>
              <Input
              name='email'
              type='text'
              placeholder='Enter your email '
              onChange={(e) => {
                emailError && setError(false)
                setEmail(e.target.value)
              }}
              value={emailForm}
              invalid={emailError}
              disabled={loading}
              />
              <FormFeedback>Oops, you may have mistyped your email.</FormFeedback>
              <FormText>Stay up to date with Serials, The Bats, and what's happening at The Flea!</FormText>
            </FormGroup>
            <Button
              onClick={handleSubmit}
              >
              Submit Email
              { loading && <span>&nbsp;&nbsp;<Spinner size='sm' /></span> }
            </Button>
          </Form>
          : <div>
              <h4>Great!</h4>
              <p>We look forward to raising a joyful hell together!</p>
              <Button>Check Out This Other Stuff!</Button>
            </div>
      }
    </Container>
  )
}

export default EmailSubmission
