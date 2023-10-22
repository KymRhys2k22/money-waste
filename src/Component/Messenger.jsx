import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'
import { motion as m } from 'framer-motion'
import messenger from "../Assets/messenger.png"


const Messenger = () => {
    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 5 }}
            className='fixed max-sm:right-3  bottom-5 z-50 right-5'>
            <a href='https://www.m.me/100076257069294' target="_blank">
                <img src={messenger} alt="messenger" width={60} />
            </a >
        </m.div>
    )
}

export default Messenger