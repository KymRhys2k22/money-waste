import React from 'react'
import Logo from '../Assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";


const Nav = () => {
  return (
    <nav className=' w-[90%] flex mx-auto items-center justify-between'>
      <img className='w-[10%]' src={Logo} alt="Money Waste Logo" />
      <ul className='flex text-[100%] justify-between font-bold w-[70%] max-sm:hidden'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Copyright</a></li>
      </ul>
      <h1 className='sm:hidden'>Money Waste Clothing Co.</h1>
      <RxHamburgerMenu size='42' className='sm:hidden'/>
    </nav>
  )
}

export default Nav