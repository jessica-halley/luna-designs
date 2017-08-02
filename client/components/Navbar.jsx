import React from 'react'

const NavBar = (props) => (
  <div>
    <img className="headerLogo" src="/images/logo.jpg"></img>
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
        <li><a href="#">HOME</a></li>
        <li><a href="#/About">ABOUT US</a></li>
        <li><a href="/#/Prints">PRINTS</a></li>
        <li><a href="#">CARDS</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Cart</a></li>
      </ul>
    </div>
  </div>
</nav>
  </div>
)


export default NavBar
