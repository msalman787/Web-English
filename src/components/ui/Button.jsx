import React from 'react'
import './Button.css'

export function Button ({ text, color }) {
  return (
    <a className='Button' style={color ? { backgroundColor: '#245CE9', color: 'white' } : { backgroundColor: 'white', color: '#245CE9' }}>
      {text}
    </a>
  )
}
