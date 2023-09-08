import React from 'react'
import './Plan.css'
import { Button } from '../ui/Button'

export default function Plan (plan) {
  const { plan: { price, name, description, benefits, stage } } = plan

  return (
    <article className='Plan'>
      <header className='Plan-header'>
        <h3>{name}</h3>
        <div>
          <p>${price}</p>
          <span>/{stage}</span>
        </div>
        {/* <p>{description}</p> */}
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
      <Button text='ELEGIR ESTE PLAN' color />
    </article>
  )
}
