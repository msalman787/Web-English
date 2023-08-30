import React from 'react'
import logo from '../../assets/icons/logo-gringolandia.png'
import './Logo.css'

export function Logo () {
  return (
    <picture className='Logo'>
      <img className='Logo-img' src={logo} />
    </picture>
  )
}
