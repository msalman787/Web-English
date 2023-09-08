import React from 'react'
import './Plan.css'
import { Button } from '../ui/Button'
import Benefit from './Benefit'

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
      <main className='Plan-main'>
        <h4>Beneficios</h4>
        <ul className='Plan-main-benefits'>
          {benefits.map(benefit => (
            <Benefit key={Math.random()} benefit={benefit} />
          ))}
        </ul>
      </main>
      <Button href='#' $secondary>ELEGIR ESTE PLAN</Button>
    </article>
  )
}
