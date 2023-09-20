import { React, useState } from 'react'
/* eslint-disable react/jsx-indent */
// eslint-disable-next-line react/jsx-indent
/* eslint-disable no-tabs */
import { Stage } from './Stage'
import { data } from '../../data/data.js'
import { Titles } from '../Titles/Titles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Scrollbar } from 'swiper/modules'
import glArrows from '../../assets/icons/gl_arrows.svg'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './Stages.css'

export function Stages () {
  const { stages } = data
  const [swiper, setSwiper] = useState(null)

  const nextTo = () => {
    swiper.slideNext()
  }

  const backTo = () => {
    swiper.slidePrev()
  }

  return (
    <>
      <section className='Stages'>
        <Titles title='Etapas del curso' />
        <p>12 Etapas para principiantes con los videos y actividades que necesitas para ser exitoso en el Ingles.</p>
      </section>
      <div className='Swiper-container swiper mySwiper'>
        <Swiper
          modules={[Autoplay, FreeMode, Scrollbar]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={4}
          watchSlidesProgress
          scrollbar={{
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 4
            }
          }}
          freeMode
          onSwiper={(s) => setSwiper(s)}
          className='Stages-slider'
        >
        {
          stages.map(({ id, title, description }) => (
            <SwiperSlide className='Stages-slide' key={id}>
              <Stage key={id} title={title} number={id}>
                <p>{description}</p>
              </Stage>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
      <section className='Stages-footer'>
        <div className='Stages-footer-buttons'>
          <button onClick={backTo} className='Stages-footer-button'><img src={glArrows} /></button>
          <div className='swiper-scrollbar' />
          <button onClick={nextTo} className='Stages-footer-button button-right'><img src={glArrows} /></button>
        </div>
      </section>
    </>
  )
}
