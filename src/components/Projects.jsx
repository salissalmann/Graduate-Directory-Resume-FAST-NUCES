import React, { useState } from 'react';
import {Button} from '@mui/material'
import MainNavigation from './MainNavigation';
import "./styles/Projects.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DirectoryContext from '../context/DirectoryContext';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const MAX_PROJECTS = 4;
const MAX_DESCRIPTION_LENGTH = 300;

const Projects = () => {
  const Context = useContext(DirectoryContext)

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const Run = async () =>
    {
      const Response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/projects/GetProjects`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization-Token': localStorage.getItem('Token')
        }
      });
      const ResponseToJson = await Response.json();
      if (ResponseToJson.Success === true) {
        setProjects(ResponseToJson.project)
      }
    }
    Run()
  })



  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    if (projects.length >= MAX_PROJECTS) {
      toast.error("Cannot Add More than 4 Projects!")
      return;
    }

    if (title.trim() === '' || description.trim() === '') {
      toast.error("Please fill in all fields.")
      return;
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
      toast.error("Please provide a description length less than 300 characters.")
      return;
    }

    Context.AddProject(title,link,description)    
    setTitle('');
    setLink('');
    setDescription('');
  };
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    toast.success("Information Added Successfully!")
    navigate('/dashboard');

  }


  const HandleCancel = () => {
    navigate('/dashboard')
  }


  return (
    <>
    <MainNavigation/>
    <div className="container">
        <div className='home-page-text-1'>
            <h1>ADD PROJECTS <span className='span-home-text'>MAX-4</span></h1>
        </div>
    </div>
  
    <div className="container my-2">
        <form onSubmit={handleSubmit}>

            <div className="container my-2">
                <input required placeholder="Add Title" type="text" name="title" id="input-1-p" value={title} label="Title" onChange={handleTitleChange}/>
            </div>

            <div className="container my-2">
                <input placeholder="Add Link" type="text" name="link" id="input-1-p" value={link} label="Link" onChange={handleLinkChange}/>
            </div>

            <div className="container" id="p-desc-box">
                <textarea id="text-area-p" placeholder="Add Description" name="description" className='form-control' rows="2" value={description} onChange={handleDescriptionChange}></textarea>
            </div>

            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" ,marginLeft:"-1%"}}> Add Project</Button>
            <ToastContainer theme="colored"/>
        </form>
    </div>

    <div className="container my-2">
    {projects.map((project, index) => (
        <div className="container my-2" key={index} id='projects-display'>
            <div className="container my-2">
                <h6>Title: {project.title}</h6>
            </div>
            <div className="container my-2">
                {(project.link) ? (<h6>Link: {project.link}</h6>) : (<h6>Link: None</h6>)}
            </div>
            <button className="btn btn-danger" onClick={() => Context.DeleteProject(project._id)}>Delete</button>
        </div>
        
    ))}
    </div>

    <form onSubmit={Submit}>
          <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
          <Button type="button" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}} onClick={HandleCancel}> CANCEL</Button>
    </form>
    </>
    
)}

export default Projects;