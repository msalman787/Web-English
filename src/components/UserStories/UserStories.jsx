import { Titles } from '../Titles/Titles'
import { Button } from '../ui/Button'
import { UserStorie } from './UserStorie'
import { data } from '../../data/data.js'

import './UserStories.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid } from 'swiper/modules'

export function UserStories () {
  const { comments } = data
  return (
    <>
      <section className='Stories' id='userStories'>
        <section className='Stories-left'>
          <Titles title='Lo que dicen mis estudiantes' />
          <p className='Stories-p'>Nada es más poderoso que el testimonio de quienes han caminado por el mismo camino que estás a punto de emprender.
            Mis estudiantes han descubierto su pasión, han desafiado sus propios límites y han logrado resultados sorprendentes. ¿Qué esperas? Únete a esta comunidad de estudiantes motivados, enérgicos y apasionados.
          </p>
          <section className='Stories-web'>
            <Button href='#plans' $secondary>OBTENER CURSO</Button>
          </section>
        </section>
        <section className='Stories-right'>
          <Swiper
            modules={[Autoplay]}
            className='Swiper-users'
            direction='vertical'
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={2}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true
            }}
            loop
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 3
              }
            }}
          >
            {comments.map(({ id, comment, user, date }) => (
              <SwiperSlide key={id} className='swiper-slide-users'>
                <UserStorie
                  comment={comment}
                  user={user}
                  date={date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <Button className='Stories-button' aria-label='Abrir Link' href='#plans' $secondary>OBTENER CURSO</Button>
      </section>
    </>
  )
}
