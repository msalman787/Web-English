import React from 'react'
import iconCheck from '../../assets/icons/gl_tick-circle-red.svg'
import './Benefit.css'

export default function Benefit ({ benefit }) {
  return (
    <section className='Benefit'>
      <img src={iconCheck} alt='icon check' />
      <h5>
        {benefit}
      </h5>
    </section>
  )
}
