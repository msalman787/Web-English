import { useState } from 'react'
import iconCloseMenu from '../../assets/icons/gl_cerrarmenu.svg'
import iconOpenMenu from '../../assets/icons/gl_abrirmenu.svg'
import glIconFB from '../../assets/icons/gl_icon-fb.svg'
import glIconIN from '../../assets/icons/gl_icon-in.svg'
import glIconML from '../../assets/icons/gl_icon-ml.svg'
import glIconTT from '../../assets/icons/gl_icon-tt.svg'
import glIconYT from '../../assets/icons/gl_icon-yt.svg'
import './NavBar.css'
import { Logo } from '../ui/Logo'

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
      <button onClick={() => setIsOpen(!isOpen)} className='Nav-button'><img src={iconOpenMenu} /></button>
      <nav className={isOpen ? 'Nav Nav-visible' : 'Nav'}>
        <section className='Nav-header'>
          <Logo size='sm' />
          <button onClick={() => setIsOpen(!isOpen)} className='Nav-close Nav-button'><img src={iconCloseMenu} /></button>
        </section>
        <ul className='Nav-ul'>
          {NAVBAR.map((item, index) => (
            <li className='Nav-li' key={index}>
              <a href={item.link} className='Nav-li--a' onClick={() => setIsOpen(!isOpen)}>{item.name}</a>
            </li>
          ))}
        </ul>
        <section className='Nav-footer'>
          <section className='Nav-content'>
            <div className='Footer-social'>
              <p>¿Tienes algo por decirnos? Escríbenos a</p>
              <a className='Footer-social-strong' href='mailto:gringolandiaenglish@gmail.com' target='no_blank'>gringolandiaenglish@gmail.com</a>
              <div className='Footer-icons'>
                <a className='Footer-a' href='https://www.instagram.com/gringolandiaenglish/' target='no_blank'>
                  <img className='Footer-img' src={glIconIN} alt='Icono de red social Instagram' />
                </a>
                <a className='Footer-a' href='https://www.tiktok.com/@gringolandiaenglish?_t=8fbdw9PkwPF&_r=1' target='no_blank'>
                  <img className='Footer-img' src={glIconTT} alt='Icono de red social TikTok' />
                </a>
                <a className='Footer-a' href='https://www.facebook.com/profile.php?id=100065104316610' target='no_blank'>
                  <img className='Footer-img' src={glIconFB} alt='Icono de red social Facebook' />
                </a>
                <a className='Footer-a' href='https://www.youtube.com/@gringolandiaenglish' target='no_blank'>
                  <img className='Footer-img' src={glIconYT} alt='Icono de red social Youtube' />
                </a>
                <a className='Footer-a' href='mailto:gringolandiaenglish@gmail.com' target='no_blank'>
                  <img className='Footer-img' src={glIconML} alt='Icono de email empresarial' />
                </a>
              </div>
            </div>
          </section>
        </section>
      </nav>
    </>
  )
}
