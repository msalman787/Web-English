import { Logo } from '../ui/Logo'
import glIconFB from '../../assets/icons/gl_icon-fb.svg'
import glIconIN from '../../assets/icons/gl_icon-in.svg'
import glIconML from '../../assets/icons/gl_icon-ml.svg'
import glIconTT from '../../assets/icons/gl_icon-tt.svg'
import glIconYT from '../../assets/icons/gl_icon-yt.svg'
import './Footer.css'

export function Footer () {
  return (
    <section className='Footer'>
      <Logo size='xl' />
      <section className='Footer-content'>
        <div className='Footer-social'>
          <p>¿Tienes algo por decirnos? Escríbenos a</p>
          <a className='Footer-social-strong' href='mailto:gringolandiaenglish@gmail.com' target='no_blank'>gringolandiaenglish@gmail.com</a>
          <div className='Footer-icons'>
            <a className='Footer-a' href='https://www.instagram.com/gringolandiaenglish/' target='no_blank'>
              <img width='24px' height='24px' className='Footer-img' src={glIconIN} alt='Icono de red social Instagram' />
            </a>
            <a className='Footer-a' href='https://www.tiktok.com/@gringolandiaenglish?_t=8fbdw9PkwPF&_r=1' target='no_blank'>
              <img width='24px' height='24px' className='Footer-img' src={glIconTT} alt='Icono de red social TikTok' />
            </a>
            <a className='Footer-a' href='https://www.facebook.com/profile.php?id=100065104316610' target='no_blank'>
              <img width='24px' height='24px' className='Footer-img' src={glIconFB} alt='Icono de red social Facebook' />
            </a>
            <a className='Footer-a' href='https://www.youtube.com/@gringolandiaenglish' target='no_blank'>
              <img width='24px' height='24px' className='Footer-img' src={glIconYT} alt='Icono de red social Youtube' />
            </a>
            <a className='Footer-a' href='mailto:gringolandiaenglish@gmail.com' target='no_blank'>
              <img width='24px' height='24px' className='Footer-img' src={glIconML} alt='Icono de email empresarial' />
            </a>
          </div>
        </div>
        <section />
      </section>
    </section>
  )
}
