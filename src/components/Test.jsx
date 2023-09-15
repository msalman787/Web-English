// import { SwiperSlide, useSwiper } from 'swiper/react'
import { Swiper } from 'swiper'
// import { Autoplay, FreeMode, Scrollbar, Navigation } from 'swiper/modules'
import { data } from '../data/data.js'
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation'
import './test.css'

export default function Test () {
  const { stages } = data

  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    // allowTouchMove: true,
    // effect: "cube",
    autoplay: {
      delay: 10000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // type: "progressbar"
      clickable: true
      // dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1
  })
  return (
    <>
      {/* <Swiper
        modules={[Autoplay, FreeMode, Scrollbar, Navigation]}
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
        navigation
        freeMode='true'
        className='test__wrapper'
        disabledClass
      > */}

      {/* <!-- Slider main container --> */}
      <div class='swiper'>
        {/* <!-- Additional required wrapper --> */}
        <div class='swiper-wrapper'>
          {/* <!-- Slides --> */}
          {stages.map(({ id, title, description }) => (
            <div class='swiper-slide' key={id}>
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
            </div>
          ))}
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div class='swiper-pagination' />

        {/* <!-- If we need navigation buttons --> */}
        <div class='swiper-button-prev' />
        <div class='swiper-button-next' />

        {/* <!-- If we need scrollbar --> */}
        <div class='swiper-scrollbar' />
      </div>
    </>
  )
}
