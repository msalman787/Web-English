import React from 'react'
import logo from '../../assets/icons/logo-gringolandia.png'
import './Logo.css'

export function Logo ({ size }) {
  return (
    <picture className='Logo'>
      <img width={size === 'sm' ? '70px' : '194px'} height={size === 'sm' ? '70px' : '194px'} className={size === 'sm' ? 'max-w-[70px]' : 'max-w-[194px]'} src={logo} alt='Imagén de logo de Gringolandia' />
    </picture>
  )
}
