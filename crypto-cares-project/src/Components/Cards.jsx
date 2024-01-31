import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom'

function Cards () {
  return (
    <>
    <div className="text1">
            <p>            Make a Difference</p>
        </div>
    
    <body>
        
    <div class="card-list">
        
        <a href="char1" class="card-item"> 
                <img src="./images/a.jpg"/>
                <h2 class="developer">Sheltering Souls</h2>
                <h5>Stop Violence Against Women in India</h5>
                <NavLink to="char1">  <button class="arrow">Donate Now</button></NavLink>
                </a>
               
               
            
            <a href="char2" class="card-item"><NavLink/>
                <img src="./images/b.jpg"/>
                <h2 class="designer">Malala Fund</h2>
                <h5>  Send a girl to school for a year in india.</h5>
                <NavLink to="char2"><button class="arrow">Donate Now</button> </NavLink>
                </a>
                
            
            
            <a href="char3" class="card-item">
                <img src="./images/c.jpg"/>
                <h2 class="editor">HelpAge India</h2>
                <h5>Help enhance the lives of elderly citizens</h5>
                <NavLink to="char3">  <button class="arrow">Donate Now</button></NavLink>
                
                </a>
            </div>
    </body>

    </>
  )
}

export default Cards