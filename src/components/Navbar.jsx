import React from 'react'
import {Link} from "react-router-dom"

 function Navbar() {
  return (
    <span  className='flex justify-between items-center  bg-white text-black gap-4 m-5 rounded-lg shadow-lg space-x-4 p-4 '>
      <h1 className='text-xl text-blue-600 italic  hover:underline transition-all duration-300 hover:scale-105'>Health Services</h1>
       <nav className='italic hover:underline transition-all duration-300 hover:scale-105 m-2 space-x-4'>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/services">Services</Link>
       <Link to="/doctors">Doctors</Link>
     </nav>
    </span>
  )
}export default Navbar
