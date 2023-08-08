import React from 'react'


const Header = (props) => {
    return (
        <header className='w-full bg-yellow-600 py-2'>
            {props.children}
        </header>
    )
}

export default Header