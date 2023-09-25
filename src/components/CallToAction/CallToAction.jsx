import React from 'react'
import { Button } from '../ui/Button'
import { Titles } from '../Titles/Titles'
import mobileCourse from '../../assets/img/gl_mobile-calltoaction.webp'
import './CallToAction.css'

export function CallToAction () {
  return (
    <section className='Call'>
      <section className='Call-section'>
        <div className='Call-section--text'>
          <Titles title='Aprovecha este descuento especial y aprende inglés de forma accesible' />
          <p>Conquista el inglés y alcanza tus metas con nuestra metodología: <strong>Verb tree learning system</strong></p>
        </div>
        <Button aria-label='Abrir link' href='#plans' $primary>OBTENER OFERTA</Button>
      </section>
      <img className='Call-img' src={mobileCourse} alt='Imagen de celular mostrando el curso Gringolandía' />
    </section>
  )
}
