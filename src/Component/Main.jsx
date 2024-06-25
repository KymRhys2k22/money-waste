import React from 'react'
import HeroSection from './HeroSection';
import hero from '../Assets/hero.svg'
import model3 from '../Assets/model3.svg'
import { FaFacebookF, FaFacebookMessenger, FaShoppingCart, FaTiktok } from 'react-icons/fa';
import { useMediaQuery } from "@uidotdev/usehooks"


const Main = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");


  return (

    <main className='w-full dark:bg-neutral-800  bg-gray-300'>
      <section style={{ backgroundImage: `url(${hero})` }} className=' w-screen h-screen  bg-cover bg-center flex justify-end items-end   '>


        <h2 className='leading-relaxed   mb-40  w-1/2 lg:w-96 lg:mb-28 text-start   ~mr-9/96 ~text-4xl/6xl text-stone-950 opacity-70 font-bold font-Lexend '>
          Respect is a word
          Money is a tool
          Style is a mission
          Graffiti is a message
        </h2>




        {/* <img className='w-full h-full object-cover' src={hero} alt="" /> */}

      </section>
      <section className=' overflow-visible max-sm:w-[400px] max-sm:rounded-none max-sm:h-[164px] max-w-[1210px] h-[410px] w-[90%] dark:bg-neutral-300 bg-neutral-800 mx-auto max-sm:my-28 my-72 rounded-3xl flex justify-end items-end '>
        <article className='max-sm:mr-0 max-sm:mt-6 mt-10 self-start mr-16  w-[598px]'>
          <h1 className='max-sm:text-base max-sm:text-bold max-sm:mb-0 mb-8 text-neutral-300 text-5xl text-center dark:text-zinc-800 font-extrabold'>ABOUT US</h1>
          <p className='max-sm:text-xs font-Lexend dark:text-zinc-800 text-neutral-300 text-center text-4xl '>
            Our vision is to create a brand that innovates new products and pushes street wear to a new level.
          </p>
          <div className='flex max-sm:mt-3 mt-9 items-center   justify-center gap-7'>
            <FaTiktok className='max-sm: durations dark:text-zinc-800 text-neutral-300' size={isSmallDevice ? 24 : 40} />
            <FaFacebookF className='durations dark:text-zinc-800 text-neutral-300' size={isSmallDevice ? 24 : 40} />
            <FaFacebookMessenger className='durations dark:text-zinc-800 text-neutral-300' size={isSmallDevice ? 24 : 40} />
            <a type='button' className='max-sm:hidden shadow-lg flex bg-amber-400 gap-3 border-2 py-[.7em] px-[3em] rounded-3xl text-center' href="https://www.m.me/100076257069294">
              <span className='text-xl font-bold'>BUY NOW</span>
              <FaShoppingCart size={24} />
            </a>

          </div>

        </article>
        <img className='max-sm:w-[184px] max-sm:h-[234px]' src={model3} alt="" />





      </section>
      <section className='max-w-[1210px] h-[410px] w-[90%] bg-neutral-300 mx-auto my-72 rounded-3xl '>

      </section>



      {/* <HeroSection /> */}
    </main >
  )
}

export default Main