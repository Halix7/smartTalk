import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-black text-white px-3 py-4  '>
        <div className='flex justify-between flex-col md:flex-row text-center '>

        
        <div className=" service mx-3 my-3">

        <h1 className='text-xl  mb-2'>
            Services
        </h1>
        <ul>
            <li>
                IELTS
            </li>
            <li>
                PTE
            </li>
        </ul>
        </div>
        <div className="contact">
            <h1 className='text-xl mb-2' >Contact Information</h1>
            <ul>
                <li>
                    address
                </li>
                <li>
                    phone no.

                </li>
                <li>
                    gmailid
                </li>
            </ul>

        </div>
        </div>
        <p className='text-center'>
        © copyright 
        </p>
    </footer>
  )
}

export default Footer;