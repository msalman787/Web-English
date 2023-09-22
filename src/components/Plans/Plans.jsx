import React from 'react'
import Plan from './Plan'
import { Titles } from '../Titles/Titles'
import { data } from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import './Plans.css'
import 'swiper/css'
import 'swiper/css/pagination'

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
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1
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
