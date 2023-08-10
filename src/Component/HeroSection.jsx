import React from 'react'
import { picture } from '../utils/data'

const HeroSection = () => {
  return (
    <section className='max-w-[900px] mx-auto w-[90%] max-sm:w-[100%]'>
      <section className='max-w-[900px] mx-auto w-[90%] max-sm:w-[100%]'>

        {picture.map((pictures, index) =>
        (
          <><img key={index} src={pictures.imageLink} alt={pictures.imageLink} />
            <p className='text-clip'>{pictures.description}</p>
          </>

        ))}







      </section>
    </section>
  )
}

export default HeroSection