import { useState } from 'react'
import iconCloseMenu from '../../assets/icons/gl_cerrarmenu.svg'
import iconOpenMenu from '../../assets/icons/gl_abrirmenu.svg'
import './NavBar.css'

const NAVBAR = [
  {
    id: 1,
    name: 'Etapas del curso',
    link: '#stages'
  },
  {
    id: 1,
    name: 'Gringolandia',
    link: '#plans'
  },
  {
    id: 1,
    name: 'Casos de exito',
    link: '#userStories'
  }
]

export function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section>
        <button onClick={() => setIsOpen(!isOpen)} className='Header__abrir Header__button'><img src={iconOpenMenu} /></button>
      </section>
      <nav className={isOpen ? 'Nav Navbar-visible' : 'Nav'}>
        <button onClick={() => setIsOpen(!isOpen)} className='Navbar__cerrar Header-button'><img src={iconCloseMenu} /></button>
        <ul className='Nav-ul'>
          {NAVBAR.map((item, index) => (
            <li className='Nav-li' key={index}>
              <a href={item.link} className='Nav-li--a' onClick={() => setIsOpen(!isOpen)}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
