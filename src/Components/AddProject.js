import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const AddProject = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [value, setValue] = useState('');

    const navigate = useNavigate()

    const handlePost = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', title);
            formData.append('summary', summary);

            const sanitizedValue = sanitizeHtml(value);
            formData.append('value', sanitizedValue);


            await axios.post("http://localhost:8000/newpost", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            toast.success("Success")
            navigate("/project")
        } catch (error) {
            console.log(error)
        }

    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };




    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
        ],
    };

    const customStyles = {
        'a': {
            color: 'blue',
        },
    };

    return (
        <>
            console.log("this is sarfaaz")
            <h2 className="text-2xl font-bold mb-4 mt-20 text-center">Add New Project</h2>
            <form className="grid grid-cols-1 gap-4 mx-10">
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="file"
                        className="w-full p-2 border rounded"
                        onChange={handleImageChange}

                    />
                </div>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="summary">Summary:</label>
                    <input
                        type="text"
                        id="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="dexcription">Description:</label>
                    <ReactQuill
                        className='h-40'
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        modules={modules}
                        style={customStyles}
                    />
                </div>
                <button
                    type="button"
                    onClick={handlePost}
                    className="bg-blue-500 text-white p-2 rounded mt-24 w-20 text-center"
                >
                    Submmit
                </button>
            </form>

        </>
    )
}

export default AddProject
