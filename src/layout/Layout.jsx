import React from 'react'
import { Header } from '../components/Header/Header'
import './Layout.css'

export function Layout (props) {
  const { children } = props

  return (
    <div className='Layout'>
      <Header />
      {children}
    </div>
  )
}
