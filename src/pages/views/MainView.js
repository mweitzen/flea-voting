import React from 'react'

import {
  Container,
} from 'reactstrap'

import MainNavbar from '../../components/MainNavbar'
import Footer from '../../components/Footer'

const MainView = ({children, backButton}) => {
  return (
    <Container fluid id="ui" className='App' >
      <MainNavbar backButton={backButton} />
        <div className="app-content">
          {children}
        </div>
      <Footer />
    </Container>
  )
}

export default MainView
