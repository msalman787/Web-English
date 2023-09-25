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
      <video preload='auto' className='Hero-video' autoPlay='autoplay' loop='loop' muted aria-label='Video'>
        <source src={videoHero} type='video/mp4' />
        Tu navegador no es compatible con videos HTML5
      </video>
      <section className='Hero-after'>
        <a href='https://gringolandiaeng.mysamcart.com/checkout/gringolandia-english-verb-tree-learning-system' className='Hero-after--a'>
          Aprende inglés y desbloquea nuevas oportunidades globales.
        </a>
      </section>
    </section>
  )
}
