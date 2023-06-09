import { useState } from 'react'
import './assets/fonts/openSauce/stylesheet.css'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
