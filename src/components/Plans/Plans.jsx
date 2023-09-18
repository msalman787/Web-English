import React from 'react'
import { Titles } from '../Titles/Titles'
import { data } from '../../data/data'
import './Plans.css'
import Plan from './Plan'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Plans () {
  const { plans } = data
  return (
    <>
      <section className='Plans-title' id='plans'>
        <div>
          <Titles title='Hay un plan perfecto para ti' />
        </div>
        <p>Nuestro objetivo es proporcionar un contenido valioso y una experiencia de aprendizaje única a un precio razonable. Creemos que la inversión en tu desarrollo personal y profesional es fundamental.</p>
      </section>
      <section className='Plans-container'>
        <Swiper
          className='Swiper-plans'
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={4}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <Plan plan={plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
