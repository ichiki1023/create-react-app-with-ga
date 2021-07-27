import React from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import AnalyticsEvents from '../const/analyticsEvent'
import { sendEvent } from '../utils/analytics'

const About: React.FC = () => {
  useDocumentTitle('About')

  return (
    <div className="App-header">
      <h1>About</h1>
      <Link className="App-link" to="/">
        Home
      </Link>
      <Link className="App-link" to="/service">
        Service
      </Link>
      <h3>Actions</h3>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.About.Actions.Action1)}
      >
        Action 1
      </button>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.About.Actions.Action2)}
      >
        Action2
      </button>
      <button
        type="button"
        onClick={() => sendEvent(AnalyticsEvents.About.Actions.Action3)}
      >
        Action 3
      </button>
    </div>
  )
}

export default About
