import React from 'react'
import { navbarText } from '../utils/data'


const Header = (props) => {
    return (
        <header className='w-full bg-bg-200 py-2 fixed z-50'>
            {props.children}
            <div className={`h-[50vh] text-center w-screen opacity-70 fixed bg-black flex flex-col justify-center sm:hidden`}>
                <ul>
                    {navbarText.map((navbar) => (
                        <li>
                            <a className='cta text-lg' href={navbar.link}>
                                {navbar.name}
                            </a>
                        </li>

                    ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header