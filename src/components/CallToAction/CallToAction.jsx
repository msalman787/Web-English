import React from 'react'
import { Button } from '../ui/Button'
import './CallToAction.css'
import mobileCourse from '../../assets/img/gl_mobile-calltoaction.png'

export function CallToAction () {
  return (
    <section className='Call'>
      <section className='Call-section'>
        <div className='Call-section--p'>
          <p>Aprovecha este descuento especial y aprende inglés de forma accesible</p>
          <p>Conquista el inglés y alcanza tus metas con nuestra metodología: <strong>Verb tree learning system</strong></p>
        </div>
        <div className='Call-section--button'>
          <Button text='OBTENER OFERTA' />
        </div>
      </section>
      <img className='Call-img' src={mobileCourse} alt='Imagen de celular mostrando el curso Gringolandía' />
    </section>
  )
}
