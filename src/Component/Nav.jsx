import React, { useEffect, useRef } from 'react'
import Logo from '../Assets/Logo.png'
import { motion as m } from 'framer-motion'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaTiktok } from "react-icons/fa"
import { navbarText } from '../utils/data'
import useScrollPosition from '../utils/useScrollPosition';
import Lottie from 'lottie-react';
import HamBurgerMenu from '../Assets/hamburger-menu.json'


const Nav = ({ toggleMenu, setToggleMenu }) => {
  const hamRef = useRef(null)
  useEffect(() => {
    if (!toggleMenu) {

      hamRef.current.setDirection(-1)
      hamRef.current.play()

    } else {


      hamRef.current.setDirection(1)
      hamRef.current.play()
    }

  }, [toggleMenu])





  return (
    <nav className=' max-w-[900px]  w-[90%] max-sm:w-[98%] flex mx-auto items-center justify-between'>

      <img className='  w-14' src={Logo} alt="Money Waste Logo" />
      <m.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3 }} className='max-md:text-sm max-sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.</m.h1>
      <ul className='max-md:text-sm flex  font-Lexend text-text-200 opacity-60 justify-between items-center w-[40%] max-sm:hidden'>
        {
          navbarText.map((navName, index) => (
            <li key={index} className='cta'>
              <a href={navName.link}>{navName.name}</a>
            </li>
          ))
        }
      </ul>
      <div className='cta  hover:text-text-200 hover:bg-transparent border-2 box-border font-bold bg-primary-200   text-center rounded-md text-[1vw] text-bg-300 px-[.5em] py-[.5em] max-sm:hidden '>
        <a className='flex items-center' href="https://www.tiktok.com/@moneywasteclothing" target="_blank">
          <h1 className='max-md:hidden'>Get yours now </h1>
          <FaTiktok className='ml-2 max-md:m-0 ' />
        </a>
      </div>
      <m.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3 }} className='sm:hidden  text-primary-100 uppercase'>Money Waste Clothing Co.
      </m.h1>
      <Lottie

        lottieRef={hamRef}
        animationData={HamBurgerMenu}
        onClick={() => setToggleMenu(!toggleMenu)}
        loop={false}
        className='cursor-pointer w-9 sm:hidden mr-1'
      />
      {/* {toggleMenu ? <RxCross1 onClick={toggle} size='38' className='sm:hidden mr-2 text-text-200 cursor-pointer' /> : <RxHamburgerMenu onClick={toggle} size='38' className='sm:hidden mr-2 text-text-200 cursor-pointer' />} */}
    </nav>
  )
}

export default Nav