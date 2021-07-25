import React from 'react'
import logo from "../img/logo.png"
// font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faBars} from '@fortawesome/free-solid-svg-icons' 

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">

    <a className="navbar-brand" href="#">
    <img src={logo} alt="logo..." className="logo"></img>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{
          color: "#fff",
      }}/>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto me-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
