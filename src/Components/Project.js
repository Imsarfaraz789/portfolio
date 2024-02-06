import React, { useState, useEffect } from 'react'
import axios from "axios"
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from "react-router-dom"



const Project = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.106:8000/projects');
        setProjects(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='text-center underline underline-offset-2 decoration-pink-500 pt-20 font-bold'>PROJECT</div>
      <div className="flex justify-center ">
        <div>

          <Link to="/login" className='flex pt-4  underline'>
            Add New Project <FaPencilAlt className='mt-1 ml-1' />
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {projects.map((projects) => (
            <div key={projects._id} className="bg-white p-4 rounded-lg shadow-md shadow-black">
              <img src={projects.image} alt='images' className="w-full h-40 object-cover mb-2 rounded-md" />
              <h2 className='font-bold '>{projects.title}</h2>
              <p className='pt-2'>{projects.summary}</p>
              <Link className='text-blue-600 underline' to={`/projects/${projects._id}`}>View More</Link>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
