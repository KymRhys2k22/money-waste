import React from 'react'
import { picture } from '../utils/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from "@uidotdev/usehooks";


const HeroSection = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");


  return (

    <section className='max-w-[1080px] mx-auto w-[90%] max-sm:w-[97%]'>
      <Swiper spaceBetween={5} slidesPerView={isSmallDevice ? 1 : 3} pagination={true} modules={[Pagination]} autoplay={{ "delay": 5000, "reverseDirection": true }} navigation={true} className='w-full'>
        {picture.map((pictures) => (
          <SwiperSlide className="" key={pictures.id}>

            <img src={pictures.imageLink} className='block object-cover w-full h-full' />


          </SwiperSlide>
        ))}
      </Swiper>










    </section >

  )
}

export default HeroSection