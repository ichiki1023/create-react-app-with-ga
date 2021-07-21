import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import useTracking from './hooks/useTracking'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'

const App: React.FC = () => {
  useTracking()

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default App
