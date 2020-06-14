import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import history from '../app/history'

import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../assets/img/logo.png'
import logoBlack from '../assets/img/logo-black.png'

import CountdownNav from '../features/countdown/CountdownNav'

const MainNavbar = ({backButton}) => {
  return (
    <Navbar className="app-header">
        <NavLink
          href="http://theflea.org/"
          className="hvr-wobble-to-bottom-right"
          >
          <NavbarBrand
            tag='img'
            src={logoBlack}
            alt="Logo"
            height="75"
            width="75"
            />
        </NavLink>


        {/* Add dynamic check to see if countdown is expired */}
          <Nav navbar style={{marginRight: '20px'}}>
            <NavbarText>
              <CountdownNav />
            </NavbarText>
            {/*
              backButton ?
                <Button
                  color="light"
                  onClick={()=>history.goBack()}
                  >
                  <FontAwesomeIcon icon='arrow-alt-circle-left'size='lg' />
                  &nbsp; Back to The Lobby
                </Button>
                : <Button tag={Link} to="/theater" color='light'>
                    Enter The Online Theater
                    &nbsp;<FontAwesomeIcon icon='arrow-alt-circle-right'size='lg' />
                  </Button>
            */}
          </Nav>
    </Navbar>
  )
}

export default MainNavbar
