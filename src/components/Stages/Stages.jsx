/* eslint-disable react/jsx-indent */
// eslint-disable-next-line react/jsx-indent
/* eslint-disable no-tabs */
import { Stage } from './Stage'
import { data } from '../../data/data.js'
import { Titles } from '../Titles/Titles'
import './Stages.css'

export function Stages () {
  const { stages } = data

  return (
    <>
      <section className='Stages'>
        <Titles title='Etapas del curso' />
        <p>12 Etapas para principiantes con los videos y actividades que necesitas para ser exitoso en el Ingles.</p>
      </section>
      <section className='Stages-slider'>
      {
        stages.map(({ id, title, description }) => (
          <Stage key={id} title={title} number={id}>
            <p>{description}</p>
          </Stage>
        ))
      }
      </section>
    </>
  )
}
