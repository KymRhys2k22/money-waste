import React from 'react'
import { picture } from '../utils/data'

const HeroSection = () => {
  return (

    <section className='max-w-[900px] mx-auto w-[90%] max-sm:w-[97%]'>

      <ul className='flex flex-wrap'>
        {picture.map((pictures) =>
        (
          <li className={`${pictures.bg}`} key={pictures.id}>
            <div className={`flex ${pictures.flexRow}  max-sm:flex-wrap max-md:flex-wrap max-md:justify-center   mt-10`} >
              <img className='w-[50%] max-sm:w-[90%] ' src={pictures.imageLink} alt={pictures.imageLink} />
              <p className={` max-sm:text-lg ${pictures.left} ${pictures.text} max-md:text-center  mx-5 text-6xl font-black `}><i><q>{pictures.description}</q></i></p>
            </div>
          </li>

        ))}
      </ul>







    </section >

  )
}

export default HeroSection