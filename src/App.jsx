import React from 'react'
import Header from './components/Header'
import Path from './components/Path'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Header />
      <Home />
      <Path />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App