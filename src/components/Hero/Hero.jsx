import React from 'react'
import './Hero.css'

export function Hero () {
  return (
    <section className='Hero'>
      <h2 className='Hero-h2'>
        Explora el mundo a través del ingles: Aprende, conecta, crece.
      </h2>
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
