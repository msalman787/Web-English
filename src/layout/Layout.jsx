import React from 'react'
import { Header } from '../components/Header/Header'
import './Layout.css'
import { Footer } from '../components/Footer/Footer'

export function Layout (props) {
  const { children } = props

  return (
    <>
      <Header />
      <div className='Layout'>
        {children}
        <Footer />
      </div>
    </>
  )
}
