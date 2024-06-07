import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
<header>
  <h2>Job Tracking</h2>

  <nav>
    <NavLink to={'/'}> Job List</NavLink>
    <NavLink to={'/new'}>Add Job</NavLink>
  </nav>
</header>
  )
}

export default Header;