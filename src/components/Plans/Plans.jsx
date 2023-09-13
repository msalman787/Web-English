import React from 'react'
import { Titles } from '../Titles/Titles'
import { data } from '../../data/data'
import './Plans.css'
import Plan from './Plan'

export function Plans () {
  const { plans } = data
  return (
    <>
      <section className='Plans-title' id='plans'>
        <div>
          <Titles title='Hay un plan perfecto para ti' />
        </div>
        <p>Nuestro objetivo es proporcionar un contenido valioso y una experiencia de aprendizaje única a un precio razonable. Creemos que la inversión en tu desarrollo personal y profesional es fundamental.</p>
      </section>
      <section className='Plans-container'>
        {plans.map((plan) => (
          <Plan plan={plan} key={plan.id} />
        ))}
      </section>
    </>
  )
}
