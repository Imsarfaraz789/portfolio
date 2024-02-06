import React from 'react'
import logo from "../Images/home-right.png.webp"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Home = () => {

    const handleDownload = () => {
        const resumeUrl = process.env.PUBLIC_URL + "Resume.pdf";
        window.open(resumeUrl, '_blank');
    };

    const handleHireMe = () => {
        const subject = encodeURIComponent("Job Opportunity Inquiry");
        const body = encodeURIComponent("Hello, I'm interested in discussing job opportunities with you.");

        const mailtoLink = `mailto:sarfaraz6562@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            <div className="flex items-center justify-evenly mt-28 flex-wrap  ">
                <div>
                    <div className="flex items-center flex-col justify-center">
                        <div><p className='font-bold'>Hello, I'm</p></div>
                        <div><p className='text-3xl leading-normal'>Sarfaraz</p></div>
                        <div>
                            <p className='text-xl'>Full Stack Developer</p>

                        </div>
                        <div className='flex mt-2'>
                            <div className='mr-6'><button className='border-2 border-blue rounded-xl hover:bg-black hover:text-white p-2'
                                onClick={handleDownload}>Download cv</button>
                            </div>
                            <div className='mr-6'><button className='border-2 border-blue rounded-xl w-28 hover:bg-black hover:text-white p-2'
                                onClick={handleHireMe}>Hire Me</button>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='p-4 2'><Link to='https://www.linkedin.com/in/imsarfaraz786/'><FaLinkedin size={25} color='black' /></Link></div>
                            <div className='p-4 2'><Link to='https://github.com/Imsarfaraz789'><FaGithub size={25} color='black' /></Link></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" flex items-center justify-center">
                        <img src={logo} alt="myimage" width={500} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
