import React from 'react'
import './Hero.css'

export function Hero () {
  return (
    <section className='Hero'>
      <p className='Hero-p'>
        Explora el mundo a través del ingles: Aprende, conecta, crece.
      </p>
      <video className='Hero-video'>
        <source src='#' />
      </video>
      <section className='Hero-after'>
        <p>
          Aprende inglés y desbloquea nuevas oportunidades globales.
        </p>
      </section>
    </section>
  )
}
