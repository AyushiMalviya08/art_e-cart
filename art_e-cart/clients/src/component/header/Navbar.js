import React from 'react';
import "./Navbar.css";
import logo from './images/logo.png';




const Navbar = () => {
  return (
    <header>
        <nav>
            <div clasName ="left">
                <div className="navlogo">
                    
                    <img src= {logo} alt="heyy" />
                
                   
                    
                </div>
                
                
        
            </div>
            <div className="middle">
            <div className="nav_searchbar">
                <input type="text" name=" " id=" " />
                </div>
            </div>

            <div className="right">
              <button id="signin">Signin

              </button>
              
            </div>
            <div className="end">
              <button id="cart ">Cart</button>
              </div>
          
            

        </nav>
        
    </header>
    

  )
}

export default Navbar
