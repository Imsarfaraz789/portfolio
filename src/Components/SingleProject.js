import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`https://p-backend-oti0.onrender.com/projects/${id}`);
                setProject(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchProjectDetails();
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }
    const createMarkup = () => {
        return { __html: project.description };
    };


    const formattedDate = new Date(project.createdAt).toLocaleDateString()
    return (
        <>
            <div className="flex flex-col justify-center mt-24 mx-10 ">
                <div className="flex justify-center">
                    <div className="">
                        <img className='object-contain' src={project.image} alt="images" />
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className='text-3xl'>{project.title}</h1>
                    <p>{formattedDate}</p>
                </div>
                <div className="mt-10 ">
                    <p dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>



        </>
    );
};

export default SingleProject;
