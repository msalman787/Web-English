import React from 'react'
import './Hero.css'
import { Titles } from '../Titles/Titles'
import videoHero from '../../assets/movies/gl_hero-low.mp4'

export function Hero () {
  return (
    <section className='Hero'>
      <div className='Hero-h2'>
        <Titles title='Explora el mundo a través del ingles: Aprende, conecta, crece.' />
      </div>
      <video className='Hero-video' autoPlay='autoplay' loop='loop' muted aria-label='Video'>
        <source src={videoHero} type='video/mp4' />
        Tu navegador no es compatible con videos HTML5
      </video>
      <section className='Hero-after'>
        <p className='Hero-after--p'>
          Aprende inglés y desbloquea nuevas oportunidades globales.
        </p>
      </section>
    </section>
  )
}
