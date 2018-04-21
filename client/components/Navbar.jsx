import React from 'react'

const NavBar = (props) => (
<span>
  <div className="background">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#/">HOME</a></li>
            <li><a href="#/About">ABOUT US</a></li>
            <li><a href="#/CardsList">CARDS</a></li>
            <li><a href="#/PrintsList">PRINTS</a></li>
            <li><a href="#/Contact">CONTACT US</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#/Checkout">ORDER FORM</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</span>
)


export default NavBar
