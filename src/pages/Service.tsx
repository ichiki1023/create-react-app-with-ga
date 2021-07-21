import React from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const Service: React.FC = () => {
  useDocumentTitle('Service')

  return (
    <div className="App-header">
      <h1>Service</h1>
      <Link className="App-link" to="/">
        Home
      </Link>
      <Link className="App-link" to="/about">
        About
      </Link>
    </div>
  )
}

export default Service
