import React,{useState} from 'react';
// import smarttalk from "../Assets/smarttalk.png";
import sm from "../Assets/sm.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=' fixed  flex justify-between bg-opacity-5 md:justify-center  text-[#03045e] bg-[#d5f1f7] w-[100%]  md:my-4 md:mx-3 p-2  z-10  '>
      <Link to="/">

      <img className='w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem] mx-2' src={sm} alt="logo" />
      </Link>
   
        {
            !isOpen && <button className=' relative mx-2 md:hidden  z-10 ' onClick={()=>{
                setIsOpen(true)  
              }}>
                <svg  viewBox='0 0 100 100' width="20">
                    <rect width="70" height="7"
                    x="14" y="30"
                    >

                    </rect>
                    <rect width="70" height="7"
                    x="14" y="50"
                    >

                    </rect>
                    <rect width="70" height="7"
                    x="14" y="70"
                    >

                    </rect>
                </svg>
              </button>
        }
                <div 
                
                className={`  flex md:static absolute   md:p-1 py-12 z-50   bg-[#d5f1f7]  ${isOpen === true ? " right-0 ":" -right-[100%] "} transition-all ease-in-out `}>
     
        {isOpen &&  <button className='absolute top-4 right-6 md:hidden' onClick={()=>{
              setIsOpen(false)  
            }} > <svg className=' ' viewBox='0 0 100 100' width="20">
            <rect className='rotate-45 origin-center' width="90" height="7"
            x="15" y="35"
            >

            </rect>
            <rect className='-rotate-45 origin-center' width="90" height="7"
            x="15" y="55"
            >

            

            </rect>
        </svg> </button>}
            <ul className='flex flex-col  md:flex-row  relative my-6 gap-6 mx-10 font-bold '  >
              
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-cyan-500 after:transition-all after:duration-300 after:ease" >
                  <Link to='/'>
                  <h1 className='text-center'>
                  Overseas Education
                  
                  </h1>
                <p className='text-[0.7rem] text-center'>Home</p>
                
                  </Link>
                </li>
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-cyan-500 after:transition-all after:duration-300 after:ease" >
                <Link to='/test'>
                  <h1 className='text-center'>
                  Standardized Tests
                  
                  </h1>
                <p className='text-[0.7rem] text-center'>IELTS/PTE</p></Link></li>
               
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-cyan-500 after:transition-all after:duration-300 after:ease" >
                <Link to='/about'>
                  <h1 className='text-center'>
                  
                  Company
                  </h1>
                <p className='text-[0.7rem] text-center'>
                About Us
                </p></Link></li>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar