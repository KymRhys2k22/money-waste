import React from 'react'
import Logo from '../Assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTiktok } from "react-icons/fa"
import { navbarText } from '../utils/data'


const Nav = () => {
  return (
    <nav className=' max-w-[900px]  w-[90%] max-sm:w-[98%] flex mx-auto items-center justify-between'>

      <img className='  w-14' src={Logo} alt="Money Waste Logo" />
      <h1 className='max-md:text-sm max-sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <ul className='max-md:text-sm flex  font-Lexend text-text-200 justify-between items-center w-[40%] max-sm:hidden'>
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
      <h1 className='sm:hidden  text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <RxHamburgerMenu size='42' className='sm:hidden text-text-200' />
    </nav>
  )
}

export default Nav