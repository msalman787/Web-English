import React from 'react'
import './About.css'
import { Button } from '../ui/Button'

export default function About () {
  return (
    <section className='About'>
      <article className='About-item'>
        <h4>Hi, im Kristian Silva</h4>
        <main className='About-main'>
          <p>¡Gracias por visitar nuestra página, me alegro de que estés aquí! ¿Alguna vez has sentido que estás "dando vueltas" con tu práctica de inglés? (perdiendo el tiempo.) ¿Quieres dominar el idioma inglés? ¿Quieres la base que todos los estudiantes necesitan para hablar con fluidez? o ¿Simplemente quieres aprender un segundo idioma para crecer como persona y transformar tu vida?</p>
          <p>Si este es tu caso, ha venido al lugar correcto. Estamos dedicados a brindarle al estudiante el aprendizaje más accesible, al mejor valor posible en el mercado actual. Hemos creado un curso para ti que está diseñado para ayudar a todos los estudiantes principiantes e intermedios a lograr la certeza y la fluidez que muchos estudiantes buscan en sus habilidades en el idioma inglés hoy.</p>
        </main>
      </article>
      <hr />
      <article className='About-item'>
        <h4>Why Gringolandia</h4>
        <main className='About-main'>
          <p>Era septiembre de 2021, en Concón Chile en pleno corazón de la pandemia. Tenía el corazón roto y solo en mi pequeña cabaña junto a la playa con mi gato. Había estado enseñando a estudiantes en línea desde marzo de 2020 ya que no podíamos salir de nuestras casas y toda la enseñanza se movía en línea.</p>
          <p>Ya no sentía que podía ayudar a mis alumnos de la escuela y de la academia con el material que me entregaban a través de las instituciones. “Cállate y sigue el programa” era el mantra que escuchaba en el entorno escolar tradicional y sabía que tenía que haber otra manera.</p>
        </main>
      </article>
      <div className='About-Button'>
        <Button text='ÚNETE A LA CLASE GRATUITA' color />
      </div>
    </section>
  )
}
