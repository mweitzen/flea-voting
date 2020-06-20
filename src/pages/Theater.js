import React from 'react'

import history from '../app/history'

import {
  Container,
  Button
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainView from './views/MainView'
import ViewingBooth from '../features/theater/ViewingBooth'

const Theater = () => (
    <MainView backButton={true}>
      <Container fluid>
        <br />
        <ViewingBooth />
        <Button
          color="light"
          onClick={()=>history.goBack()}
          style={{width: '250px'}}
          >
          <FontAwesomeIcon icon='arrow-alt-circle-left'size='lg' />
          &nbsp; Back to The Lobby
        </Button>
      </Container>
      <br />
    </MainView>
  )

export default Theater;
