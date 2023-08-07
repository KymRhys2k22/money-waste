import React from 'react'
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import Logo from '../Assets/Logo.png'

const Header = () => {
    return (
        <header className='bg-[#fff500] '>
            <section className='flex justify-between items-center py-1  min-w-[390px] max-w-[920px] my-0 mx-auto w-10/12'>
                <img className='w-14' src={Logo} alt="" />
                <div className='flex'>
                    <a href='#'><FaFacebook size='1.5rem' color='blue' className='hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150' /></a>
                    <a href='#'><FaTiktok color='#333333' size="1.5rem" className='ml-2 hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150' /></a>
                </div>

            </section>

        </header>
    )
}

export default Header