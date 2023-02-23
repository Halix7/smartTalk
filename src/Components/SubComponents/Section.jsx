import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Canada from './country/Canada'
import Australia from './country/Australia'
import Newzealand from './country/Newzealand'
import Uk from './country/Uk'
import Usa from './country/Usa'
import imgCanada from "../../Assets/canada.png";
import imgAus from "../../Assets/australia.png";
import imgnewz from "../../Assets/newz.png";
import imguk from "../../Assets/uk.png";
import imgusa from "../../Assets/usa.png";

const Section = () => {
  return (
    <section className='bg-white'>
<div className='flex justify-center items-center gap-2 md:gap-8 pt-4 text-sm md:text-md mx-10 my-4'>
  <NavLink  to='/canada' className="px-2 py-1 md:px-3 md:py-2  text-[#03045e] font-bold"  style={({isActive})=>(
    {
      borderBlock:isActive?"5px solid red":"",
      borderRadius:"1rem"
      
    }
  )}>
    <img className='w-[2rem] h-[2rem] mx-auto' src={imgCanada} alt="canada" />
    Canada
  </NavLink>
  <NavLink to='/australia'  className="px-2 py-1 md:px-5 md:py-2  text-[#03045e] font-bold"  style={({isActive})=>(
    {
      borderBlock:isActive?"5px solid blue":"",
      borderRadius:"1rem"
    }
  )}>
    <img className='w-[2rem] h-[2rem] mx-auto' src={imgAus} alt="canada" />
    Australia
  </NavLink>
  <NavLink to='/newzealand'  className="px-2 py-1 md:px-5 md:py-2  text-[#03045e] font-bold"  style={({isActive})=>(
    {
      borderBlock:isActive?"5px solid blue":"",
      borderRadius:"1rem"
    }
  )}>
    <img className='w-[2rem] h-[2rem] mx-auto' src={imgnewz} alt="canada" />
    New Zealand
  </NavLink>
  <NavLink to='/uk'  className="px-2 py-1 md:px-5 md:py-2 text-center text-[#03045e] font-bold"  style={({isActive})=>(
    {
      borderBlock:isActive?"5px solid blue":"",
      borderRadius:"1rem"
    }
  )}>
    <img className='w-[2rem] h-[2rem] mx-auto' src={imguk} alt="canada" />
    U.K
  </NavLink>
  <NavLink to='/usa'  className="px-2 py-1 md:px-5 md:py-2  text-[#03045e] font-bold"   style={({isActive})=>(
    {
      borderBlock:isActive?"5px solid red":"",
      borderRadius:"1rem"
    }
  )}>
    <img className='w-[2rem] h-[2rem] mx-auto' src={imgusa} alt="canada" />
    U.S.A
  </NavLink>
</div>
   <div>
    <Routes>

    <Route exact default path='/canada' element={<Canada/>}/>
    <Route exact default path='/australia' element={<Australia/>}/>
    <Route exact default path='/newzealand' element={<Newzealand/>}/>
    <Route exact default path='/uk' element={<Uk/>}/>
    <Route exact default path='/usa' element={<Usa/>}/>
    <Route exact path='*' element={<Canada/>}/>
    </Routes>
   </div>

    </section>
  )
}

export default Section