import React from 'react'
import MainNavigation from './MainNavigation'
import "./styles/Dashboard.css"
import {useState , useContext } from 'react'
import { Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DirectoryContext from '../context/DirectoryContext'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function PersonalInfo()
{
 
  const Context = useContext(DirectoryContext)  

  useEffect( () => 
  {
    const Run = async () =>
    {
        Context.CheckPersonalInfo()
        Context.CheckSkills()
        Context.CheckEducation()
        Context.CheckWorkExperience()
        Context.CheckProjects()
        Context.CheckDescription()
    }
    Run()
  },[])

  return (
    <>
    <MainNavigation/>
    <div className="container my-3">
        <div className='home-page-text-1'>
            <h1>RESUME INFORMATION</h1>
        </div>
    </div>

    <>
        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Personal Information</h5>
                {
                    (Context.PersonalInfo===false) ? ( <Link to="/PersonalInfo"><button type="button" >Add</button></Link> ) : ( <Link to="/PersonalInfo"><button type="button" disabled >Added</button></Link> )
                }
            </div>   
        </div>

        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Your Description</h5>
                {
                    (Context.DescriptionStatus===false) ? ( <Link to="/Description"><button type="button" >Add</button></Link> ) : ( <Link to="/Description"><button type="button" disabled >Added</button></Link>)
                }
            </div>   
        </div>

        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Your Skills</h5>
                {
                    (Context.SkillsStatus===false) ? ( <Link to="/Skills"><button type="button" >Add</button></Link> ) : ( <Link to="/Skills"><button type="button" disabled >Added</button></Link> )
                }
            </div>
        </div>

        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Your Education</h5>
                {
                    (Context.EducationStatus===false) ? ( <Link to="/Education"><button type="button" >Add</button></Link> ) : ( <Link to="/Education"><button type="button" disabled >Added</button></Link> )
                }
            </div>
        </div>

        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Your Experience</h5>
                {
                    (Context.WorkExperienceStatus===false) ? ( <Link to="/WorkExperience"><button type="button" >Add</button></Link> ) : ( <Link to="/WorkExperience"><button type="button" disabled >Added</button></Link> )
                }
            </div>
        </div>

        <div className="container my-4 d-flex justify-content-center">
            <div className='dashboard'>
                <h5>Add Your Projects</h5>
                {
                    (Context.ProjectsStatus===false) ? ( <Link to="/Projects"><button type="button" >Add</button></Link> ) : ( <Link to="/Projects"><button type="button" disabled >Added</button></Link> )
                }
            </div>
        </div>

        <div className="container my-4 d-flex justify-content-center">  
            <div className='dashboard'>
                <h5>Add Your FYP</h5>
                <Link to="/FYP"><button type="button" >EDIT</button></Link> 
            </div>
        </div>
    </>
    </>
    )
}
