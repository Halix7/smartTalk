import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between bg-black text-white px-3 py-4  '>
        <div className="service mx-3 my-3">

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
        <p>
        © copyright 
        </p>
    </footer>
  )
}

export default Footer;