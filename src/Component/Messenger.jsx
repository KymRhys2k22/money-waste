import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'
import { motion as m } from 'framer-motion'


const Messenger = () => {
    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 5 }}
            className='fixed max-sm:right-3  bottom-5 z-50 right-5'>
            <a href='https://www.m.me/100076257069294' target="_blank">
                <FaFacebookMessenger size={50} className=' stroke-text-200 text-blue-500  hover:animate-pulse stroke-[10px] ' />
            </a >
        </m.div>
    )
}

export default Messenger