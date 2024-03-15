import React, { useState } from 'react'
import { navbarText } from '../utils/data'
import Nav from './Nav'
import { motion as m } from "framer-motion"
import { FaTiktok } from "react-icons/fa"
import DarkMode from './DarkMode'


const Header = ({ setDarkMode, darkMode }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const variants = {
        open: { opacity: .8, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }
    return (
        <header className='backdrop-filter backdrop-blur-sm bg-opacity-50 bg-neutral-950 w-full max-sm:py-3  lg:py-10 fixed z-50 '>
            <Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setDarkMode={setDarkMode} darkMode={darkMode} />
            <m.div animate={toggleMenu ? "open" : "closed"} variants={variants} className='w-screen mt-2 h-screen fixed bg-bg-300 flex flex-col sm:hidden items-end pr-10 pt-10'>
                <ul >
                    {navbarText.map((navbar, index) => (
                        <li onClick={() => { setToggleMenu(!toggleMenu) }} className='cta text-3xl font-Lexend  pt-8  text-text-200 text-end' key={index}>
                            <a href={navbar.link}>
                                {navbar.name}
                            </a>
                        </li>

                    ))
                    }
                </ul>
                <ul>
                    <li>
                        <a href="https://www.tiktok.com/@moneywasteclothing">
                            <FaTiktok className='cta m-7 text-text-200' size={40} />
                        </a>
                    </li>

                </ul>
                <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} hidden={false} />



            </m.div>
        </header>
    )
}

export default Header