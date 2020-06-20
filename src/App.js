import React from 'react'

import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './app/history'

// Bootstrapa
import 'bootstrap/dist/css/bootstrap.min.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faVolumeMute,
  faCommentSlash,
  faSmileWink,
  faStar,
  faPlayCircle,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons'

// Refresh Scroll Position on Navigate
import ScrollToTop from './app/utils/ScrollToTop'

// Pages
import Theater from './pages/Theater'
import Lobby from './pages/Lobby'

// Add Font Awesome Icons to the global library for easy retrieval
library.add(fab, faCommentSlash, faSmileWink, faVolumeMute, faStar, faPlayCircle, faArrowAltCircleRight, faArrowAltCircleLeft, faLongArrowAltRight)

const App = () => (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <Route path="/theater" component={Theater} />
        <Route path="/lobby" component={Lobby} />
        <Redirect path="/" to='/lobby' />
      </Switch>
    </Router>
  )

export default App;
