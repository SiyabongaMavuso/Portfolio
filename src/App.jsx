import { useState } from 'react'
import Sidenev from './components/Sidenev'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <Sidenev/>
      <Main/>
      <Work/>
      <Projects/>
    </div>
  )
}

export default App
