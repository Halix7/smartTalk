import React,{useState} from 'react';
// import smarttalk from "../Assets/smarttalk.png";
import sm from "../Assets/smartway.png"
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=' fixed  flex justify-between bg-opacity-5 md:justify-center  text-white bg-green-700 w-[100%]  md:my-4 md:mx-3 p-2  z-10  '>
      <Link to="/">

      <img className='w-[3rem] h-[2rem] md:w-[8rem] md:h-[6rem]  bg-white shadow-lg mx-2 my-4' src={sm} alt="logo" />
      </Link>
   
        {
            !isOpen && <button className=' relative mx-2 md:hidden  z-10 ' onClick={()=>{
                setIsOpen(true)  
              }}>
                <svg  viewBox='0 0 100 100' width="20"  fill='orange'>
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
                
                className={`  flex md:static absolute flex-col md:flex-row   md:p-1 py-12 z-50   bg-green-700  ${isOpen === true ? " right-0 ":" -right-[100%] "} transition-all ease-in-out `}>
     
        {isOpen &&  <button className='absolute top-4 right-6 md:hidden' onClick={()=>{
              setIsOpen(false)  
            }} > <svg className=' ' viewBox='0 0 100 100' width="20" fill='orange'>
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
              
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-green-500 after:transition-all after:duration-300 after:ease" >
                  <Link to='/'>
                  <h1 className='text-center'>
                  Overseas Education
                  
                  </h1>
                <p className='text-[0.7rem] text-center'>Home</p>
                
                  </Link>
                </li>
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer  after:bg-green-500 after:transition-all after:duration-300 after:ease" >
                <Link to='/test'>
                  <h1 className='text-center'>
                  Standardized Tests
                  
                  </h1>
                <p className='text-[0.7rem] text-center'>IELTS/PTE</p></Link></li>
               
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-green-500 after:transition-all after:duration-300 after:ease" >
                <Link to='/about'>
                  <h1 className='text-center'>
                  
                  Company
                  </h1>
                <p className='text-[0.7rem] text-center'>
                About Us
                </p></Link></li>
                <li className=" after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-green-500 after:transition-all after:duration-300 after:ease" >
                <Link to='/form'>
                  <h1 className='text-center'>
                  
                  Get Cource
                  </h1>
                <p className='text-[0.7rem] text-center'>
                Form
                </p></Link></li>
            </ul>
            <div className="social  mx-4 flex items-center justify-center md:flex-col  gap-4 ">
        <a target='_blank' rel='noopener noreferrer' href="https://instagram.com/smart_talk_cheeka?r=nametag">

        <InstagramIcon/>
        </a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/smarttalk.chika.1?mibextid=LQQJ4d">

        <FacebookIcon/>
        </a>
      </div>
            </div>
        </nav>
  )
}

export default Navbar