import React, { Fragment } from 'react'
import c1 from "../../../Assets/Canada/ca1.jpg";
import c2 from "../../../Assets/Canada/ca2.jpg";
import c3 from "../../../Assets/Canada/ca3.jpg";
import c4 from "../../../Assets/Canada/ca4.jpg";
import c5 from "../../../Assets/Canada/ca5.jpg";
import c6 from "../../../Assets/Canada/ca6.jpg";
import c7 from "../../../Assets/Canada/ca7.jpg";
import c8 from "../../../Assets/Canada/ca8.jpg";
import c9 from "../../../Assets/Canada/ca9.jpg";
import c10 from "../../../Assets/Canada/ca10.jpg";
import c11 from "../../../Assets/Canada/ca11.jpg";
import c12 from "../../../Assets/Canada/ca12.jpg";
import c13 from "../../../Assets/Canada/ca13.jpg";
import c14 from "../../../Assets/Canada/ca14.jpg";
import c15 from "../../../Assets/Canada/ca15.jpg";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';




const Canada = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((open) => { return !open});
    console.log(open);
  };
  return (
    <div>
      <div className='box py-2 px-3 mx-2 md:mx-10 md:p-8 grid  grid-cols-4 md:grid-cols-6 gap-5 shadow-2xl' >
        <a href="https://collegecanada.com/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '    src={c1} alt="c1" />
        </a>
        <a href="https://acsenda.com/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c2} alt="c2" />
        </a>
        <a href="https://www.algonquincollege.com/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c3} alt="c3" />
        </a>
        <a href="https://www.yellowpages.ca/bus/British-Columbia/Vancouver/Cambridge-Western-Academy/6637489.html" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c4} alt="c4" />
        </a>
        <a href="https://assiniboine.net/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c5} alt="c5" />
        </a>
        <a href="https://alexandercollege.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c6} alt="c6" />
        </a>
        <a href="https://brontecollege.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c7} alt="c7" />
        </a>
        <a href="https://www2.acadiau.ca/home.html" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c8} alt="c8" />
        </a>
        <a href="https://brescia.uwo.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c9} alt="c9" />
        </a>
        <a href="https://brightoncollege.com/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c10} alt="c10" />
        </a>
        <a href="https://collegeofmassage.com/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c11} alt="c11" />
        </a>
        <a href="https://bowvalleycollege.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c12} alt="c12" />
        </a>
        <a href="https://humber.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c13} alt="c13" />
        </a>
        <a href="https://www.senecacollege.ca/home.html" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c14} alt="c14" />
        </a>
        <a href="https://www.sheridancollege.ca/" target="_blank" rel="noopener noreferrer">

        <img  className='cursor-pointer w-[9rem] h-[2rem] md:h-[3rem] hover:scale-110 transition-all ease-in-out '   src={c15} alt="c15" />
        </a>
      </div>
      <div className='my-4 mx-3 text-sm'>
        <h1 className='text-2xl font-extrabold text-orange-600'>
        Study in Canada
        </h1>
        <p>
        It is mainly the continuously mounting inquisitiveness and keenness of the students to study in Canada, study in a practice oriented research-based education system instead of studying in a traditionally designed theoretical and project-based education system that has led to the development and growth of overseas education as never before, in contemporary times. Another reason that can be attributed to the increasing popularity of overseas education is the fact that employers across industries prefer hiring candidates possessing international qualification from top universities or colleges across the globe. <br /> <br />
        Among all prime international education destinations, it is Canada that holds the topmost position. Canada is recognized as the safest international education destination in the world offering high-quality of life and education. Now, acknowledging the popularity of study in Canada as a preferred international study destination, let us find out in below paragraphs as what makes Canada, the No. 1 international education destination. <br /> <br />
        Canada has witnessed tremendous growth in the number of international education aspirants, over the years and this growth is increasing with each passing years. The UN survey has rated Canada for the consecutive ninth year as among the top most preferred countries in the world to live. Canada boosts of its peaceful, friendly, secured and compassionate community. The country has its complete faith in equivalence, diversity, admiration and tolerance for all individuals as it is given in Canadian Charter of Rights and Freedoms and the Canadian Multiculturalism Act.
        </p>
        <h2 className='text-2xl font-extrabold text-orange-600 mt-5'>
        Benefits of Studying in Canada
        </h2>
        <p>
        Studying in Canada is a lifetime opportunity as the country’s educational institutes maintain high standards of academic excellence and are continuously acknowledged among the top international rankings. The parameters that make Canada the most preferred education destination may include:
        </p>
        <h3 className='text-2xl font-extrabold text-orange-600 mt-5'>
        Diversified Programs
        </h3>
        <p>
        The educational institute in Canada offers a wide variety of programs to international students to choose from. Students from across the globe come to Canada for higher education prospects and Canadian universities offer more than 10,000 undergraduate and graduate degree programs, as well as professional degree programs and certificate courses. Students can also choose to pursue various programs like degrees, diplomas, certificate programs, short courses, and so on across industries including; telecommunications, agriculture, computer technology, medicine, business studies, and environmental science agriculture, fisheries, paramedical technology and so on.
        </p>
        <h3 className='text-2xl font-extrabold text-orange-600 mt-5'>
        Affordability
        </h3>
        <p>
        Comparing the fee structure of the institutes across industries in prime international education destinations indicates that Canada is the most affordable of all including; US, UK, New Zealand, Australia and so on.
        </p>
        <h3 className='text-2xl font-extrabold text-orange-600 mt-5'>
        Scholarship or Financial Assistance in Study in Canada
        </h3>
        <p>
        Acknowledging the passion among the Indian students to excel, the Canadian universities and colleges enthusiastically welcome and admit Indian students to their academic programs. Also, Canadian Government admits that international students bring fresh innovative ideas to Canada, thus, contributing a great deal to the wide range of disciplines and the industry with the knowledge and understanding that they carry with themselves while moving to Canada. Canadian Government also offers various scholarship and financial assistance schemes to the most deserving international students.
        </p>
        <h3 className='text-2xl font-extrabold text-orange-600 mt-5'>
        Better Future Career Prospects in Canada
        </h3>
        <p>
        On successful completion of the studies in Canada the students will get the chance to enhance their career prospects as they will become the preferred choice of the employers across industries. Moreover, possessing an international exposure will prepare them for a rewarding career ahead. Also, it will enhance their chances to settle down in the country permanently, after gaining an experience of one year.
        </p>
      <div className="relative w-full lg:max-w-sm">
        <div className="box border-[3px] border-orange-600 my-3 px-2 py-1">
          <div className='flex justify-between ' >

          <h1 className='text-2xl text-orange-600'>
            Top University in Canada
          </h1>
          <button className='cursor-pointer  ' onClick={handleOpen}>

          <KeyboardArrowUpIcon className={` text-orange-600 font-extrabold  ${open && "rotate-180 "}`}    />
          </button>
          </div>
          {

          open && <ul className=' mt-4 mx-6'>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www2.acadiau.ca/home.html">
                Acadia University
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener noreferrer" href="https://brocku.ca/">
               Brock University
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.cbu.ca/">
                Cape Breton University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.capilanou.ca/">
                Capilano University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://carleton.ca/">
                Carleton University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://concordia.ab.ca/">
                Concordia University of Edmonton
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.dal.ca/">
              Dalhousie University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.fdu.edu/">
              Fairleigh Dickinson University
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.mi.mun.ca/">
              Fisheries and Marine Institute of Memorial University of
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.mi.mun.ca/">
              Newfoundland
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.kpu.ca/">
              Kwantlen Polytechnic University
              </a>
            </li>
            <li>
              <a href="https://www.lakeheadu.ca/">
              Lakehead University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.macewan.ca/home/">
              MacEwan University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.mcmaster.ca/">
              Mcmaster University
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://www.mun.ca/">
              Memorial University of Newfoundland
              </a>
            </li>
          </ul>
         }
        </div>

        </div>
      </div>
    </div>
  )
}

export default Canada;