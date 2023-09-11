import React from 'react'
import { Logo } from '../ui/Logo'
import { NavBar } from './NavBar'
import { Button } from '../ui/Button'
import './Header.css'

export function Header () {
  return (
    <header className='Header'>
      <Logo size='sm' />
      <NavBar />
      <div className='Header-button'>
        <Button text='HABLEMOS' color />
      </div>
    </header>
  )
}
