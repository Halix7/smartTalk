import { useState } from 'react';
import PicForm from "../Assets/form.jpg"
import emailjs from '@emailjs/browser';

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    city: '',
  });
  
  // const sendEmail = (e) => {
  //   e.preventDefault();

  // };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_e8ld912', 'template_z7rsc0h', e.target, 'tFRMc-kruLoO7U2XV')
      .then((result) => {
          console.log(result.text);
          // alert("success!")
      }, (error) => {
          console.log(error.text);
      });
      setFormData({
        name: '',
        phone: '',
        course: '',
        city: '',
      })
  };

  return (
    <div className="bg-black h-[100vh] pt-52 pb-10">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full px-4 py-5 md:w-1/2">
            <form onSubmit={handleSubmit}>
         
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={3}
              />

     
              <label className="block mb-2 text-sm font-bold text-gray-700 mt-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                minLength={5}
              />
 
              <label className="block mb-2 text-sm font-bold text-gray-700 mt-2" htmlFor="course">
                Course
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="course"
                name="course"
                type="text"
                placeholder="Enter your Course"
                value={formData.course}
                onChange={handleChange}
                required
                minLength={2}
              />
         
              <label className="block mb-2 text-sm font-bold text-gray-700 mt-2" htmlFor="city">
                City
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
                minLength={2}
              />
       
          
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              >
                Submit
              </button>
              </form>
          </div>
          <div className="pic md:w-1/2 mt-6 mr-4 mb-5">
            <img src={PicForm} alt="form" />
          </div>
          </div>
          </div>
          </div>
  )}
export default AdvancedForm;
          
