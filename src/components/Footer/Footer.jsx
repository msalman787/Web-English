import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import './Footer.css'

export function Footer () {
  return (
    <section className='Footer'>
      <Logo size='xl' />
      <section className='Footer-content'>
        <section className='Footer-info'>
          <p>Únete al grupo de telegram y a la clase grupal gratuita</p>
          <form className='Footer-info-form'>
            <input type='text' placeholder='Nombre' />
            <Button $secondary>Enviar</Button>
          </form>
        </section>
        <div className='Footer-social'>
          <p>¿Tienes algo por decirnos? Escríbenos a <a href='mailto:gringolandiaenglish@gmail.com' target='no_blank'>gringolandiaenglish@gmail.com</a></p>
          <div className='Footer-icons'>
            <a className='Footer-a' href='https://www.instagram.com/gringolandiaenglish/' target='no_blank'>
              <img className='Footer-img' src='src/assets/icons/gl_icon-in.svg' />
            </a>
            <a className='Footer-a' href='https://www.youtube.com/@gringolandiaenglish'>
              <img className='Footer-img' src='src/assets/icons/gl_icon-yt.svg' />
            </a>
            <a className='Footer-a' href='https://www.tiktok.com/@gringolandiaenglish?_t=8fbdw9PkwPF&_r=1' target='no_blank'>
              <img className='Footer-img' src='src/assets/icons/gl_icon-tt.svg' />
            </a>
            <a className='Footer-a'>
              <img className='Footer-img' src='src/assets/icons/gl_icon-ml.svg' />
            </a>
            <a className='Footer-a' href='https://www.facebook.com/profile.php?id=100065104316610' target='no_blank'>
              <img className='Footer-img' src='src/assets/icons/gl_icon-fb.svg' />
            </a>
          </div>
        </div>
        <section />
      </section>
    </section>
  )
}
