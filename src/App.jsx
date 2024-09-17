import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
    
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element = {<Welcome />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/about' element = {<AboutMe />} />
            <Route path='/projects' element = {<Projects />} />
            <Route path='/skills' element = {<Skills />} />
          </Routes>
        </div>
      </div>
    
    </>
  )
}

export default App
