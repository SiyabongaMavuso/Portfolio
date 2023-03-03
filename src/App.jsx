import { useState } from 'react'
import Sidenev from './components/Sidenev'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenev/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
