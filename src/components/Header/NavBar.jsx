import './NavBar.css'

const NAVBAR = [
  'Etapas del curso',
  'Gringolandia',
  'Casos de exito'
]

export function NavBar () {
  return (
    <nav className='Nav'>
      <ul className='Nav-ul'>
        {NAVBAR.map((item, index) => (
          <li className='Nav-li' key={index}>
            <a href='' className='Nav-li--a'>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
