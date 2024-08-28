import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar-container'>
        <span className='navbar-heading'>Routing without Lib</span>
        <div>
            <a href='/' className='navbar-path'>Home</a>
            <a href='/about' className='navbar-path'>About</a>
            <a href='/contact' className='navbar-path'>Conatc</a>
        </div>
    </div>
  )
}

export default Navbar