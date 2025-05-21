import React from 'react'
import logo from '../Assets/Images/logo.png';
import { motion } from "framer-motion";

export default function Preloader() {
    return (
        <div className='h-screen w-screen bg-white flex justify-center items-center'>
            <motion.img
                src={logo} // Replace with your logo path
                alt="Logo"
                className='md:h-56 md:w-56 h-40 w-40'
                animate={{ opacity: [0, 1, 0] }} // Fade in and out
                transition={{ duration: 4, repeat: Infinity }} // 2s cycle, infinite repeat
            />
        </div>
    )
}

