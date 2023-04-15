import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Modal from "./SubComponents/Modal";

const Contact = () => {
  return (
    <div className=''>
    <div className='' >
      <div className="map ">
        <button className=' py-4 text-black' >
          <a className='bg-white  px-4 py-2  rounded-md shadow-lg active:bg-green-400 active:text-orange-200 font-bold' target='_blank' rel='noopener noreferrer' href="https://www.google.com/maps/place/Smart+Talk+-+Best+Ielts+Institute+in+Cheeka,+Best+PTE+Coaching+Institute+in+Cheeka,+Best+Visa+Consultant+in+Cheeka/@30.0389845,76.2652734,12z/data=!4m19!1m12!4m11!1m3!2m2!1d76.3346246!2d30.0394304!1m6!1m2!1s0x3911d143a61bf833:0x97855cfcf63e63b3!2sSmart+Talk+-+Best+Ielts+Institute+in+Cheeka,+Best+!2m2!1d76.3353136!2d30.0390031!3m5!1s0x3911d143a61bf833:0x97855cfcf63e63b3!8m2!3d30.0390031!4d76.3353136!16s%2Fg%2F11fl7dl86b">
            Get Direction
          </a>
        </button>
      </div>
      <div className="social my-2 ">
        <a target='_blank' rel='noopener noreferrer' href="https://instagram.com/smart_talk_cheeka?r=nametag">

        <InstagramIcon/>
        </a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/smarttalk.chika.1?mibextid=LQQJ4d">

        <FacebookIcon/>
        </a>
      </div>
      <div className="qr">
        <Modal/>
      </div>
      
    </div>
    </div>
  )
}

export default Contact