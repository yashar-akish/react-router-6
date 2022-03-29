
import { Link } from 'react-router-dom'

import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home Page</Link>
      <Link to="about">About Page</Link>
      <Link to="products">Products Page</Link>
    </nav>
  )
}

export default Navbar