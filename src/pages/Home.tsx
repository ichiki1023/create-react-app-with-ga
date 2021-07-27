import React from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import AnalyticsEvents from '../const/analyticsEvent'
import { sendEvent } from '../utils/analytics'

const Home: React.FC = () => {
  useDocumentTitle('Home')

  return (
    <div className="App-header">
      <h1>Home</h1>
      <Link className="App-link" to="/about">
        About
      </Link>
      <Link className="App-link" to="/service">
        Service
      </Link>
      <h3>Actions</h3>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.Home.Actions.Action1)}
      >
        Action 1
      </button>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.Home.Actions.Action2)}
      >
        Action2
      </button>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.Home.Actions.Action3)}
      >
        Action 3
      </button>
    </div>
  )
}

export default Home
