import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Doctors from './components/Doctors'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './index.css'
import './App.css'

function App( ) {
  

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
