import React from 'react'
import girlNotebook from '../../assets/img/gl_girl-notebook.jpg'
import './Goals.css'

export function Goals () {
  return (
    <section className='Goals'>
      <section className='Goals-list'>
        <p>
          ¡Atrévete a explorar nuevas oportunidades y alcanzar tus metas aprendiendo inglés!
        </p>
        <ul className='Goals-ul'>
          <li className='Goals-li'>Al ser considerado el idioma universal de la comunicación, aprender inglés te permitirá conectar con personas de diferentes culturas y países alrededor del mundo.</li>
          <li className='Goals-li'>Muchos recursos y conocimientos en áreas como la ciencia, tecnología, investigación y entretenimiento están en inglés, por lo que aprender el idioma te dará acceso a ellos.</li>
          <li className='Goals-li'>Aprender inglés es un desafío que estimula tu mente, mejora tus habilidades cognitivas y te brinda una mayor comprensión de diferentes culturas, lo que amplía tu perspectiva y fomenta el crecimiento personal.</li>
        </ul>
      </section>
      <img className='Goals-img' src={girlNotebook} />
    </section>
  )
}
