import React from 'react'
import './Header.css'

// imagens
import logo from '../img/logo.png'

const Header = () => {
  return (
    <header>
        <img className='logo' src={logo} alt="logo" />
        <h1>Pet Shop</h1>
    </header>
  )
}

export default Header