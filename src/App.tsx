import React from 'react'
import Nav from './components/Nav/Nav'
import Landing from './pages/landing/Landing'
import './App.css'
import Preload from './components/preload/Preload'
function App() {
  return (
    <div>
      <div className="showcontent">please desktop only , thank you </div>

      <div className="landing">
        <Preload/>
      <Nav/>
      <Landing/>
      </div>
     
    </div>
  )
}

export default App
