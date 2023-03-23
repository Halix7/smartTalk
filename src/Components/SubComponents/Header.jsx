import React from 'react'
import { motion } from 'framer-motion'
import img from "../../Assets/world-2.jpg";

const headerSlide={
    hidden:{
        x:"100vw"},
    show:{
        x:0
    }
}

const Header = () => {
  return (
    <header className=" my-32 md:mt-52 text-center  " >
        <div >
            <div className='backdrop-blur-sm py-14 '>

            <motion.h1  initial="hidden" animate="show" variants={headerSlide} className='text-xl md:text-2xl font-extrabold spectral text-cyan-400  '>WANT TO GO ABROAD FOR HIGHER <br /> EDUCATION ?</motion.h1>
            <motion.p initial={{ opacity:0   }} animate={{opacity:1 , transition:{delay:1}}} className='leading-5 text-sm font-bold text-white' >
            SELECT RIGHT COURSE, BE AT RIGHT COLLEGE <br />
WE ARE YOUR PATHFINDER AT EACH STEP OF <br /> ABROAD EDUCATION PROCESS
            </motion.p>
            </div>
            <img className='absolute -top-10 -z-10 opacity-[0.9] w-full h-[90%] ' loading='lazy' src={img} alt="headerback" />
        </div>
    </header>
  )
}

export default Header