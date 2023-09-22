import React from 'react'
import { Logo } from '../ui/Logo'
import { NavBar } from './NavBar'
import { Button } from '../ui/Button'
import './Header.css'
import { Marquee } from '../Marquee/Marquee'

export function Header () {
  return (
    <header className='Header'>
      <Marquee />
      <section className='Header-container'>
        <Logo size='sm' />
        <NavBar />
        <Button className='Header-button' href='mailto:gringolandiaenglish@gmail.com' $secondary>HABLEMOS</Button>
      </section>
    </header>
  )
}
