/* eslint-disable react/jsx-indent */
// eslint-disable-next-line react/jsx-indent
/* eslint-disable no-tabs */
import React from 'react'
import { Stage } from './Stage'
import './Stages.css'
import { data } from '../../data/data.js'

export function Stages () {
  const { stages } = data

  return (
    <section className='Stages'>
      <h2>Etapas del curso</h2>
      <p>12 Etapas para principiantes con los videos y actividades que necesitas para ser exitoso en el Ingles.</p>
      <section className='Stages-slider'>
        {
					stages.map(({ id, title, description }) => (
						<Stage key={id} title={title} number={id}>
							<p>{description}</p>
						</Stage>
					))
				}
      </section>
    </section>
  )
}
