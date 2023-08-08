import React from 'react'
import  Renz from '../Assets/mny.jpg'
import  Pot from '../Assets/mny (9).jpg'

const HeroSection = () => {
  return (
    <section className='max-w-[900px] mx-auto w-[90%] max-sm:w-[100%]'>
        <img src={Renz} alt="Renz and R-jay" />
        <img src={Pot} alt="Pot" className='mt-3' />
    </section>
  )
}

export default HeroSection