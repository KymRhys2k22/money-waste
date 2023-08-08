import React from 'react'
import Logo from '../Assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import {FaTiktok} from "react-icons/fa"


const Nav = () => {
  return (
    <nav className=' max-w-[900px]  w-[90%] max-sm:w-[98%] flex mx-auto items-center justify-between'>

      <img className='  w-14' src={Logo} alt="Money Waste Logo" />
      <h1 className='max-md:text-sm max-sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <ul className='max-md:text-sm flex  font-Lexend text-text-200 justify-between items-center w-[50%] max-sm:hidden'>
        <li className='cta'><a href="#">Home</a></li>
        <li className='cta'><a href="#">Shop</a></li>
        <li className='cta'><a href="#">About</a></li>
        <li className='cta'><a href="#">Contact</a></li>
        <li className='cta  hover:text-text-200 hover:bg-transparent border-2 box-border font-bold bg-primary-200  max-md:hidden text-center rounded-md text-[1vw] text-bg-300 px-[.5em] py-[.5em]'><a className='flex items-center' href="https://www.tiktok.com/@moneywasteclothing" target="_blank">Get yours now <FaTiktok className='ml-2'/></a></li>
      </ul>
      <h1 className='sm:hidden  text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <RxHamburgerMenu size='42' className='sm:hidden text-text-200' />
    </nav>
  )
}

export default Nav