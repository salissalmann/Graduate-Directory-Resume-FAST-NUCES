import React from 'react'
import "./styles/Resume.css"
import { useState, useContext } from 'react'
import { Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DirectoryContext from '../context/DirectoryContext'
import MainNavigation from './MainNavigation'
import { useEffect } from 'react'
import {Buffer } from 'buffer';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Resume()
{
    const Context = useContext(DirectoryContext)
    const [Effect, setEffect] = useState(false)

    const resumeWrapperRef = useRef(null);

  const handleScreenshotPNG = () => {
    html2canvas(resumeWrapperRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'resume.png';
      link.click();
    });
  };

  const handleScreenshotPDF = () => {
    const resumeWrapper = resumeWrapperRef.current;
    const resumeWrapperHeight = resumeWrapper.offsetHeight;
    const resumeWrapperWidth = resumeWrapper.offsetWidth;
  
    html2canvas(resumeWrapper, {
      height: resumeWrapperHeight,
      width: resumeWrapperWidth,
      scale: 4 // Increase scale to capture at 2x pixel density (HD)
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Use A4 size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (resumeWrapperHeight * pdfWidth) / resumeWrapperWidth; // Calculate height based on aspect ratio
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };
  
        
  function formatDate(inputDate) {
        var convertedDate = new Date(inputDate);
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = monthNames[convertedDate.getMonth()];
        var year = convertedDate.getFullYear();
        var formattedDate = month + "-" + year;
        return formattedDate;
      }
      
    useEffect(() => {
        const Run = async () =>
        {
            Context.UserDetails()
            Context.GetDescription()
            Context.GetSkills()
            Context.GetEducation()
            Context.GetWorkExperience()
            Context.GetProjects()
            Context.GetFYP()
            setEffect(true)
        }
        if (Effect === false)
        {
            Run()
        }
    })
    

    let ProfilePicture = "";       
    if (Effect === true && Context.PersonalDetails)
    {
        const base64String = Buffer.from( Context.PersonalDetails.img.data , 'base64')
        ProfilePicture = URL.createObjectURL(
            new Blob([base64String.buffer], { type: 'image/*' } )
        );  
    }



            

  return (
    <>
        <MainNavigation/>     
        {
        (Effect === true && Context.PersonalDetails!== undefined && Context.Description!==undefined)?
        (
        <>
            <div className="container my-3" ref={resumeWrapperRef} id="ResumeWrapper">
            {Context.PersonalDetails &&
            (
                <div className="resume-header">
                    <div className='resume-header-pt-1'>
                        <img id="profile" src={ProfilePicture} width={180} height={180} alt="Profile"/></div>
                    <div className='resume-header-pt-2'>
                        <h2>{Context.PersonalDetails.firstName} {Context.PersonalDetails.lastName}</h2>  
                        <div className="details-pt-1">
                             <h6><b>Phone: </b>{Context.PersonalDetails.phone},</h6>
                             <h6><b>Email: </b>{Context.PersonalDetails.email}</h6>    
                        </div> 
                        <div className="details-pt-1">
                             <h6><b>Location: </b>{Context.PersonalDetails.city},{Context.PersonalDetails.country}</h6>
                        </div>
                        <div className="details-pt-1">
                             <h6><b>LinkedIn: </b>{Context.PersonalDetails.linkedIn}</h6>
                        </div>
                    </div>
                </div>
            )}

            {Context.Description &&
            (
                <div className="resume-body">
                    <div className="resume-body-pt-1">
                        <h3>Profile:</h3>
                        {Context.Description && <h6>{Context.Description}</h6>}
                    </div>
                </div>
            )}
            
                <div className="resume-body">
                    <div className="resume-body-pt-2">
                        <h3>Skills:</h3>
                        <div className="body-row">
                        {(Context.Skills.length > 0) && 
                        (
                            Context.Skills.map((skill) => (                    
                            <li>{skill}</li>
                            ))
                        )}
                        </div>
                    </div>
                </div>

                {Context.Education &&
                (
                    <div className="resume-body">
                        <div className="resume-body-pt-2">
                            <h3>Education:</h3>
                            <div className='education-display-main'>
                            {
                                Context.Education.map((education) => ( 
                                <div className='education-display'> 
                                    <div className='education-int'>
                                        <h6><b>{education.institution}</b></h6>
                                        <div className='timeline'>                                                      
                                            <h6>{formatDate(education.startYear)} - {(education.endYear === "Present" ? education.endYear : formatDate(education.endYear))}</h6>
                                        </div>
                                    </div>
                                    <div className='education-int-desc'>           
                                        <h6><b className='bld'>Field of Study:</b> {education.degree}</h6>
                                        <h6>{education.description}</h6>
                                                                                    
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                )}

                {Context.WorkExperience &&
                (
                    <div className="resume-body">
                        <div className="resume-body-pt-2">
                            <h3>Work Experience:</h3>
                            <div className='education-display'>
                            {
                                Context.WorkExperience.map((work) => (
                                <div className='education-display-1'>
                                    <div className='education-int-1'>
                                        <div className='txt'>                                        
                                            <h6><b>Company:</b> {work.company}</h6>
                                            <h6><b>Position:</b> {work.position}</h6>
                                        </div>
                                    </div>
                                <div className='education-int-desc-1'>
                                    <h6><b>Description:</b> {work.description}</h6>
                                    <h6><b>Timeline:</b> {formatDate(work.startYear)} - {(work.endYear === "Present" ? work.endYear : formatDate(work.endYear))}</h6>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
                )}

                {Context.Projects &&
                (
                    <div className="resume-body">
                        <div className="resume-body-pt-2">
                            <h3>Projects:</h3>
                            <div className='education-display'>
                            {
                                Context.Projects.map((project) => (
                                <div className='education-display-1'>
                                    <div className='education-int-1'>
                                        <div className='txt'>
                                            <h6><b>Project Name:</b> {project.title}</h6>
                                        </div>
                                    </div>
                                    <div className='education-int-desc-1'>
                                        <h6><b>Description:</b> {project.description}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                )}
                
                {Context.FYP &&
                (
                    <div className="resume-body">
                        <div className="resume-body-pt-2" id="bdt-2">
                            <h3>Final Year Project:</h3>
                            <div className='education-display'>
                            {
                                Context.FYP.map((fyp) => (
                                <div className='education-display-1'>
                                    <div className='education-int-1'>
                                        <div className='txt'>
                                            <h6><b>Project Title:</b> {fyp.projectTitle}</h6>
                                        </div>
                                    </div>
                                    <div className='education-int-desc-1'>
                                        <h6><b>Description:</b> {fyp.projectDescription}</h6>
                                        <h6><b>Supervisor: </b>{fyp.supervisor}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                )}                                        
            </div> 
            <Button onClick={handleScreenshotPNG} padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}>SAVE AS PNG</Button>
            <Button onClick={handleScreenshotPDF} padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}}>SAVE AS PDF</Button> 

        </>
        ):
        (
            <div className="container my-3" id="ResumeWrapper">
                <h4>Loading......</h4>
            </div>
        )  
        }
    </>

  )
}
