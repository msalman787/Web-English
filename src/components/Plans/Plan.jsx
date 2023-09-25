import React from 'react'
import { Button } from '../ui/Button'
import Benefit from './Benefit'
import { motion } from 'framer-motion'
import './Plan.css'

export default function Plan (plan) {
  const { plan: { price, name, benefits, stage, url } } = plan

  return (
    <motion.article
      whileTap={{
        scale: 0.8,
        transition: { duration: 1 }
      }}
      className='Plan'
    >
      <header className='Plan-header'>
        <h3>{name}</h3>
        <div>
          <p>${price}</p>
          <span>/{stage}</span>
        </div>
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
      <section>
        <Button aria-label='Abrir link' href={url} $secondary>ELEGIR ESTE PLAN</Button>
      </section>
    </motion.article>
  )
}
