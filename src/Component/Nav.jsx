import React from 'react'
import Logo from '../Assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";


const Nav = () => {
  return (
    <nav className=' max-w-[900px]  w-[90%] max-sm:w-[98%] flex mx-auto items-center justify-between'>

      <img className='  w-14' src={Logo} alt="Money Waste Logo" />
      <h1 className='max-md:text-sm max-sm:hidden text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <ul className='max-md:text-sm flex font-Lexend text-text-200 justify-between w-[50%] max-sm:hidden'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Copyright</a></li>
      </ul>
      <h1 className='sm:hidden  text-primary-100 uppercase'>Money Waste Clothing Co.</h1>
      <RxHamburgerMenu size='42' className='sm:hidden text-text-200' />
    </nav>
  )
}

export default Nav