import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Headers = () => {
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>

                    <Link className='cursor-pointer' to='home'>Sarfaraz<span className='text-red-600'>Ali</span></Link>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static mt-2 text-xl bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    <div className='mr-16 cursor-pointer hover:text-blue-800  '>
                        <Link className="" to="/" spy='true' smooth="true" duration={500}>Home</Link>
                    </div>
                    <div className='mr-16 cursor-pointer hover:text-blue-800 '>
                        <Link className="" to="/about" spy="true" smooth="true" duration={500}>About</Link>
                    </div>
                    <div className='mr-16 cursor-pointer hover:text-blue-800 '>
                        <Link className="" to="/project" spy="true" smooth="true" duration={500}>Project</Link>
                    </div>

                    {/* <div className='mr-16 cursor-pointer hover:text-blue-800 '>
                        <Link className="" to="/addproject" spy={true} smooth={true} duration={500}>Add Project</Link>
                    </div> */}


                </ul>
            </div>
        </div>
    )
}

export default Headers

