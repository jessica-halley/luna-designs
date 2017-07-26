
import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'react-router'

import Home from './Home'
import Header from './Header'
import printsList from './PrintsList'
import CartList from './CartList'
import NavBar from './Navbar'
import SamsCheckout from './Checkout'



const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Prints' component={printsList} />
        <Route exact path='/CartList' component={CartList} />
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
