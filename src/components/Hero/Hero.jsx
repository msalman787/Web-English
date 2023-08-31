import React from 'react'
import './Hero.css'
import { Titles } from '../Titles/Titles'

export function Hero () {
  return (
    <section className='Hero'>
      <div className='Hero-h2'>
        <Titles title='Explora el mundo a través del ingles: Aprende, conecta, crece.' />
      </div>
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
