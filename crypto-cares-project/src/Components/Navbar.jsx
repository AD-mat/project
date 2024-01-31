import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav class="navbar">
    <div class="nav-content">
      <div class="logo">
      <img src='./images/logo.jpg'></img>
        <a href="/">CryptoCares</a>
      </div>
      <div className="cont"> <ul class="nav-links">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="about"><li> About us</li></NavLink>
        <NavLink to="camp"><li>Add Campaign</li></NavLink>
        <NavLink to="cont"><li>Contact us</li></NavLink>
        
      </ul></div>
     
    </div>
  </nav>  
   

    </>
    
  )
}

export default Navbar