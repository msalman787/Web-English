import goalIcon from '../../assets/icons/gl_note-list.svg'
import './Goal.css'

export function Goal ({ fact }) {
  return (
    <section className='Goal'>
      <img width='24px' height='24px' src={goalIcon} alt='Icono de goal' />
      <p>
        {fact}
      </p>
    </section>
  )
}
