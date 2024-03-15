import React, { useEffect, useRef } from 'react'
import Logo from '../Assets/Logo.png'
import { motion as m } from 'framer-motion'

import { FaTiktok } from "react-icons/fa"
import { navbarText } from '../utils/data'

import Lottie from 'lottie-react';
import HamBurgerMenu from '../Assets/hamburger-menu.json'
import DarkMode from './DarkMode'


const Nav = ({ toggleMenu, setToggleMenu, darkMode, setDarkMode }) => {
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
  console.log("dark", darkMode)





  return (
    <nav className=' max-w-[1216px]  w-[80%] max-sm:w-[98%] flex mx-auto items-center justify-between'>

      <img className='hover:cursor-pointer  w-14' src={Logo} alt="Money Waste Logo" />

      <m.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3 }} className='max-md:text-sm text-xl max-sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.</m.h1>
      <ul role='list' className='max-md:text-sm flex  font-Lexend text-text-200 opacity-60 justify-end items-center w-[40%] max-sm:hidden'>
        {
          navbarText.map((navName, index) => (
            <li key={index} className={`transition rounded-md py-3 px-2 w-24 text-center ${navName.name == "Contact us" && "text-sm"} focus:bg-slate-900 ease-in-out delay-100 hover:bg-slate-800 hover:text-yellow-200`}>
              <a href={navName.link}>{navName.name}</a>
            </li>
          ))
        }
      </ul>

      <a href="https://www.tiktok.com/@moneywasteclothing" target="_blank" type='button' className='durations text-amber-400 hover:text-zinc-800 hover:bg-amber-400 border-2 box-border rounded-xl   text-[1vw]  border-amber-300 px-[.5em] py-[.3em] max-sm:hidden '>
        <span className='max-md:hidden font-Lexend font-extralight' >Get yours now </span>
      </a>
      <m.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3 }} className='sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.
      </m.h1>
      <Lottie

        lottieRef={hamRef}
        animationData={HamBurgerMenu}
        onClick={() => setToggleMenu(!toggleMenu)}
        loop={false}
        className='cursor-pointer w-9 sm:hidden mr-1'
      />
      {/* {toggleMenu ? <RxCross1 onClick={toggle} size='38' className='sm:hidden mr-2 text-text-200 cursor-pointer' /> : <RxHamburgerMenu onClick={toggle} size='38' className='sm:hidden mr-2 text-text-200 cursor-pointer' />} */}
      <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
    </nav>
  )
}

export default Nav