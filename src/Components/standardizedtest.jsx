import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
// import lib from "../Assets/lib.jpg";

const standardizedtest = () => {
  return (
    <>
   
     
    
    <div className={`grid md:grid-cols-2 gap-6 pt-20 md:pt-40 pb-20 px-6 bg-gray-100 `}

    >
      <div>
        <h1 className='text-blue-900 text-xl md:text-3xl font-bold underline my-4 cardo '>
     

        IELTS
        
        </h1>
        <h2 className=' text-blue-900 font-bold text-xl  md:text-2xl mb-4 spectral '>
          Definition
        </h2>
        <p>
        <i className='mx-2 text-blue-600 font-bold anton '>
          IELTS
          
          </i> 
            stands for the International English Language Testing System. It is an internationally recognized test designed to assess the language ability of non-native speakers of English who want to study or work in English-speaking countries. The test is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge Assessment English. The IELTS test measures the four main language skills - listening, reading, writing, and speaking - in order to determine the candidate's overall level of English proficiency. The test is available in two versions - Academic and General Training - and is taken by millions of people every year in more than 140 countries around the world.
        </p>
        <h2 className='text-blue-900 font-bold text-xl  md:text-2xl my-4 spectral'>
          Details and Format
        </h2>
        <ul className='flex flex-col gap-4 '>
          <li>    <CheckIcon className='text-blue-400 font-extrabold mx-3 '/> IELTS is an English proficiency test jointly owned by the British Council, IDP: IELTS Australia & Cambridge English.</li>
          <li>    <CheckIcon className='text-blue-400 font-extrabold mx-3 '/> Governments prefer IELTS Academic for studies and IELTS General for migration in most countries than any other English language test. 10,000+ overseas organisations have listed that IELTS is mandatory on their websites.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>IELTS has two options: a standard pen and paper-based exam and a computerised one. Most centres have both options, allowing you to choose as per convenience. </li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>IELTS has four major sections, the Listening, Reading, and Writing tests which are done in one sitting. Then we have the Speaking test, which may be on the same day or within seven days before or after the other tests.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>The results are available after 13 days of the test. Test centres will see that the Report Form reaches you within 13 days.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>For evaluation, some specialised examiners conduct the speaking section of the exam. And to assess your writing section, a specialised examiner will read and evaluate your writing tasks.</li>
        </ul>
      </div>

      <div>
      <h1 className='text-blue-900 text2xl md:text-3xl font-bold underline my-4 cardo'>
        

        PTE
        
        </h1>

        <h2 className='font-bold text-xl  md:text-2xl mb-4 text-blue-900 spectral'>
        Definition
        </h2>
        <p>
        <i className='mx-2 text-blue-600 font-bold anton'>
        PTE  
          
          </i> 
         stands for Pearson Test of English, which is a computer-based English language proficiency test designed to evaluate the English language skills of non-native speakers. The test is developed and administered by Pearson, a leading education company, and is recognized by universities, colleges, and governments around the world. PTE assesses the candidate's ability to use English in an academic or professional setting, and measures their proficiency in four key areas: reading, writing, listening, and speaking. The test is divided into three main sections - Speaking and Writing, Reading, and Listening - and takes around three hours to complete. PTE scores are widely accepted by academic institutions and employers as proof of a candidate's English language proficiency.
        </p>
        <h2 className='font-bold text-xl  md:text-2xl my-4 text-blue-900 spectral'>
        Details and Format
        </h2>
        <ul className='flex flex-col gap-4'>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>The PTE Academic test is conducted by Pearson PLC, a British multinational publishing headquartered in London. It is the world’s best learning company.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>PTE Academic is critically acclaimed by some of the best universities worldwide, including Harvard Business School, Yale, etc. PTE Academic is accepted for visa purposes by Australia and New Zealand too.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>PTE is a computerised test. You need to click the correct options and speak your answers to the headset for the speaking test.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>PTE Academic has three main parts, Listening, Reading, Speaking and Writing, which can be completed within 3 hours in one sitting.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>PTE results are mostly published within five business days. Most students receive the results within three days as well. In a small number of cases, it may take more than five days.</li>
          <li>   <CheckIcon className='text-blue-400 font-extrabold mx-3 '/>The assessment for the PTE is completely automated and conducted by a computer program. There is no one physically analysing the writing and speaking.</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default standardizedtest