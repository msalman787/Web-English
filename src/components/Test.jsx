import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Scrollbar } from 'swiper/modules'
import { data } from '../data/data.js'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './test.css'
import { progress } from 'framer-motion'

export default function Test () {
  const { stages } = data

  window.addEventListener('load', () => {
    const progress = document.getElementById('progress')
  })
  function updateProgress () {
    progress.style.width = `${(document.body.scrollWidth / window.innerWidth) * 100}%`
    requestAnimationFrame(updateProgress)
  }

  return (
    <>
      <Swiper
        modules={[Autoplay, FreeMode, Scrollbar]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={4}
        scrollbar={{
          hide: true
        }}
        freeMode='true'
        className='flex gap-10 my-10'
      >
        {stages.map(({ id, title, description }) => (
          <SwiperSlide className='test__stage' key={id}>
            <p className='Stage-p'>{id}</p>
            <main className='Stage-container'>
              <h3>{title}</h3>
              <p>{description}</p>
            </main>
            <footer className='Stage-footer'>
              <a className='Stage-a' href='#'>
                Lo quiero
              </a>
              <span>{'>'}</span>
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
