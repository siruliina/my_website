import { useState } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import Title from './components/Title'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

const App = () => {

  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Title />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App