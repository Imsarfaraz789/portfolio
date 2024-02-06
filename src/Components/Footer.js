import axios from 'axios'
import React, { useState } from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const Footer = () => {

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleFomr = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://192.168.1.106:8000/sendgmail", {
        email,
        subject,
        message
      })
      setEmail('');
      setSubject('');
      setMessage('');
      toast.success("Message Sent")
    } catch (error) {
      console.log(error)
    }
  }

  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + "Resume.pdf";
    window.open(resumeUrl, '_blank');
  };

  return (
    <div>
      <div className=" bg-black text-white mt-10">
        <h1 className='text-center pt-10 underline underline-offset-4 decoration-pink-500 font-bold'>CONTACT US</h1>
        <hr className='mx-36 mt-20 h-10' />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
          <div className="grid justify-center">
            <p className='font-bold underline underline-offset-4 decoration-pink-500'>DROP A MESSAGE</p>

            <div>
              <input className=' mt-6 w-96 rounded-lg p-2 text-black  ' type="email" placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input className=' mt-6 w-96 rounded-lg p-2 text-black  ' type="email" placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div>
              <input className=' mt-6 w-96 rounded-lg p-2  text-black h-40' type="text" placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className='p-4 border-2 mt-10 w-36 hover:bg-white hover:text-black'
              type='button'
              onClick={handleFomr}
            >Send Message</button>
          </div>

          <div className="mx-8 pt-10">
            <p className='underline underline-offset-4 decoration-pink-500 font-bold'>CONTACT ME</p>
            <div className='pt-4 '>

              <p className='hover:underline'>410206 Panvel Navi Mumbai</p>
              <p className='pt-2 hover:underline'>sarfaraz6562@gmail.com</p>
            </div>
            <div className='pt-10'>

              <button className='border-2 p-4  hover:bg-white hover:text-black ' onClick={handleDownload}>DOWNLOAD RESUME</button>
            </div>
            <div className='flex pt-14 '>
              <div className='mr-10'><Link to="https://www.facebook.com"><FaFacebook size={30} color='blue' /></Link></div>
              <div className='mr-10'><Link to="https://www.instagram.com"><FaInstagram size={30} color='red' /></Link></div>
              <div className='mr-10'><Link to="https://www.linkedin.com/in/imsarfaraz786/"><FaLinkedin size={30} color='blue' /></Link></div>

            </div>
          </div>

        </div>

        <div><p className='text-center p-10 0 10'>Copyright ©2024 | This template is made with by sarfaraz</p></div>
      </div>
    </div>
  )
}

export default Footer
