import girlNotebook from '../../assets/img/gl_girl-notebook.webp'
import { Titles } from '../Titles/Titles'
import { Goal } from './Goal'
import { data } from '../../data/data.js'
import './Goals.css'

export function Goals () {
  const { goals } = data
  return (
    <section className='Goals'>
      <section className='Goals-list'>
        <Titles title='¡Atrévete a explorar nuevas oportunidades y alcanzar tus metas aprendiendo inglés!' />
        <ul className='Goals-ul'>
          {goals.map(goal => <Goal key={goal.id} fact={goal.fact} />)}
        </ul>
      </section>
      <img width='24px' height='24px' className='Goals-img' src={girlNotebook} alt='Mujer sentada en el piso utilizando una notebook' />
    </section>
  )
}
