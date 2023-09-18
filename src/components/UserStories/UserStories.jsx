import { Titles } from '../Titles/Titles'
import { Button } from '../ui/Button'
import { UserStorie } from './UserStorie'
import { data } from '../../data/data.js'

import './UserStories.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export function UserStories () {
  const { comments } = data
  return (
    <>
      <section className='Stories'>
        <section className='Stories-left'>
          <Titles title='Lo que dicen mis estudiantes' />
          <p className='Stories-p'>Nada es más poderoso que el testimonio de quienes han caminado por el mismo camino que estás a punto de emprender.
            Mis estudiantes han descubierto su pasión, han desafiado sus propios límites y han logrado resultados sorprendentes. ¿Qué esperas? Únete a esta comunidad de estudiantes motivados, enérgicos y apasionados.
          </p>
          <Button href='#plans' $secondary>OBTENER CURSO</Button>
        </section>
        <section className='Stories-right'>
          <Swiper
            modules={[Autoplay]}
            className='mySwiper myswiper'
            direction='vertical'
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={1}
            autoplay={{
              delay: 4000
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
      </section>
    </>
  )
}
