import React from 'react'
import './style.css'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="headerText">Welcome to ECommerce Website</h1>
      <a href="/login">Login</a>
    </div>
  )
}
export default Header;