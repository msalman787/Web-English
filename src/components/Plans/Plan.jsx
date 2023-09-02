import React from 'react'
import './Plan.css'
import { Button } from '../ui/Button'

export default function Plan (plan) {
  const { plan: { price, name, description, benefits } } = plan
  return (
    <article className='Plan'>
      <header>
        <p>{name}</p>
        <p>${price}<span>/Mensual</span></p>
        <p>{description}</p>
      </header>
      <hr />
      <main>
        <p>Beneficios</p>
        <ul>
          {benefits.map(benefit => (
            <li key={Math.random()}>
              {benefit}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <Button text='ELEGIR ESTE PLAN' color />
      </footer>
    </article>
  )
}
