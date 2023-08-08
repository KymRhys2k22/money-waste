import React from 'react'


const Header = (props) => {
    return (
        <header className='w-full bg-bg-200 py-2 fixed z-50'>
            {props.children}
        </header>
    )
}

export default Header