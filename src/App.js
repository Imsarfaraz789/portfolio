import React from 'react'
import About from "./Components/About"
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom"
import Project from './Components/Project'
import AddProject from './Components/AddProject'
import SingleProject from './Components/SingleProject'
import SignUp from "./Components/SignUp"
import SignIn from "./Components/SignIn"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/addproject' element={<AddProject />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path='register' element={<SignUp />} />
        <Route path='login' element={<SignIn />} />
      </Routes >
    </>
  )
}

export default App
