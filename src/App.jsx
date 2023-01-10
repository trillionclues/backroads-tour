import React from 'react'
import Navbar from '../src/components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Tours from './components/Tours'

import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  )
}

export default App
