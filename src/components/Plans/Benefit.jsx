import { IconCheck } from '../ui/IconCheck'
import './Benefit.css'

export default function Benefit ({ benefit }) {
  return (
    <section className='Benefit'>
      <IconCheck />
      <h5>
        {benefit}
      </h5>
    </section>
  )
}
