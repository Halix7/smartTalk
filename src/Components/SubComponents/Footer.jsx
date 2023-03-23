import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' bg-black text-white px-3 py-4  '>
        <div className='flex justify-around flex-col md:flex-row text-center md:text-start '>

        
        <div className=" service mx-3 my-3">

        <h1 className='text-xl  mb-2'>
            Services
        </h1>
       <Link className="text-gray-300 hover:text-white hover:underline mx-3" to={'/test'}>
        IELTS
       </Link>
       <br />
       <Link className="text-gray-300 hover:text-white hover:underline mx-3" to={'/test'}>
        PTE
       </Link>
       <Link/>
        </div>
        <div className="contact ">
            <h1 className='text-xl  mb-2' >Contact Information</h1>
            <ul>
                <li>
                    First Floor, KS Tower,Kaithal <br /> Rd,Cheeka  <br />
                    Haryana 136035
                </li>
                <li>
                   +91 9050006588

                </li>
                <li>
                    gmailid@gmail.com
                </li>
            </ul>

        </div>
        </div>
        <div className="container mx-auto mt-3 px-6">
            <div className="flex justify-center gap-4 items-center">
                <p className="text-white">© 2023 All rights reserved.</p>
                <div className="flex items-center">
                    <a href="#" className="text-gray-300 hover:text-white hover:underline mx-3">Terms of Service</a>
                    <a href="#" className="text-gray-300 hover:text-white hover:underline mx-3">Privacy Policy</a>
                </div>
            </div>
    </div>
    </footer>
  )
}

export default Footer;