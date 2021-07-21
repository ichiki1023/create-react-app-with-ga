import React from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

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
    </div>
  )
}

export default About
