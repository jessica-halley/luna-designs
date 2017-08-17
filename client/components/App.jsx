
import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'react-router'

import Home from './Home'
import Cards from './CardsList'
import Prints from './PrintsList'
import About from './About'
import NavBar from './Navbar'
import SamsCheckout from './Checkout'



const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/CardsList' component={Cards}  />
        <Route exact path='/PrintsList' component={Prints}  />
        <Route exact path='/Checkout' component={SamsCheckout} />
      </div>
    </Router>
  )
}

function mapState2Props(state) {
  return {
    page: state.page
  }
}

export default connect(mapState2Props)(App)
