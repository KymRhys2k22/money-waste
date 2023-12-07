import React from 'react'
import { picture } from '../utils/data'
import { motion as m } from 'framer-motion'

const HeroSection = () => {
  return (

    <section className='max-w-[1080px] mx-auto w-[90%] max-sm:w-[97%]'>

      <ul className='flex flex-wrap'>
        {picture.map((pictures) =>
        (
          <li className={`${pictures.bg}`} key={pictures.id}>
            <div className={`flex ${pictures.flexRow}  max-sm:flex-wrap max-md:flex-wrap max-md:justify-center `} >
              <m.img initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .7 }}
                className='w-[50%] h-full max-sm:w-[100%] ' src={pictures.imageLink} alt={pictures.imageLink} />
              <m.p initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className={` max-sm:text-lg max-sm:h-24 ${pictures.left} ${pictures.text} max-md:text-center  mx-5 text-5xl mt-5 font-black `}><i><q>{pictures.description}</q></i></m.p>

            </div>

          </li>

        ))}
      </ul>







    </section >

  )
}

export default HeroSection