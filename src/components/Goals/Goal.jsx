import goalIcon from '../../assets/icons/gl_note-list.svg'
import './Goal.css'

export function Goal ({ fact }) {
  return (
    <section className='Goal'>
      <img src={goalIcon} />
      <p>
        {fact}
      </p>
    </section>
  )
}
