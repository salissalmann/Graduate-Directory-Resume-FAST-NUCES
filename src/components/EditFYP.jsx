import React from 'react'
import MainNavigation from './MainNavigation'
import "./styles/PersonalInfo.css"
import {useState} from 'react'
import { Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useContext } from 'react';
import DirectoryContext from '../context/DirectoryContext'

export default function PersonalInfo()
{
    const Context = useContext(DirectoryContext)
    const Navigate = useNavigate()
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [emailMember1, setEmailMember1] = useState("");
    const [emailMember2, setEmailMember2] = useState("");
    const [emailMember3, setEmailMember3] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectType, setProjectType] = useState("");
    const [shortTitle, setShortTitle] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [coSupervisor, setCoSupervisor] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [file, setFile] = useState("");
    const UploadFile = ()=>
    {
        document.getElementById("fileID").click();
    }

    const HandleEmailMember1Value = (event) => { setEmailMember1(event.target.value); };
    const HandleEmailMember2Value = (event) => { setEmailMember2(event.target.value); };
    const HandleEmailMember3Value = (event) => { setEmailMember3(event.target.value); };
    const HandleProjectTitleValue = (event) => { setProjectTitle(event.target.value); };
    const HandleTypeChange = (event) => { setProjectType(event.target.value); };
    const HandleShortTitleValue = (event) => { setShortTitle(event.target.value); };
    const HandleSupervisorValue = (event) => { setSupervisor(event.target.value); };
    const HandleCoSupervisorValue = (event) => { setCoSupervisor(event.target.value); };
    const HandleProjectDescriptionValue = (event) => { setProjectDescription(event.target.value); };
    const HandleFileValue = (event) => { setFile(event.target.value); };
    const HandleElementChange = (event) => { SetElementChange(event.target.value); };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setFileName(file.name);
    };
    

    const [ElementChange, SetElementChange] = useState("");

    const Submit = async (e) => {
        e.preventDefault();
        toast.success("Please Wait...");
        const formData = new FormData();
        formData.append("change", ElementChange);
        if (ElementChange==="projectTitle")
        {
          formData.append("projectTitle", projectTitle);
        }
        else if (ElementChange==="projectType")
        {
          formData.append("projectType", projectType);
        }
        else if (ElementChange==="shortTitle")
        {
          formData.append("shortTitle", shortTitle);
        }
        else if (ElementChange==="supervisor")
        {
          formData.append("supervisor", supervisor);
        }
        else if (ElementChange==="coSupervisor")
        {
          formData.append("coSupervisor", coSupervisor);
        }
        else if (ElementChange==="projectDescription")
        {
          formData.append("projectDescription", projectDescription);
        }
        else if (ElementChange==="testImage")
        {
          formData.append("testImage", file);
        }
        try {
            const Response = await fetch(`http://localhost:3001/UpdateFYP`, {
                method: 'PUT',
                headers: {
                    'Authorization-Token': localStorage.getItem("Token"),
                },
                body: formData,
            });
            const ResponseToJson = await Response.json();
            if (ResponseToJson.success===true)
            {
                toast.success("FYP Details Updated Successfully");
            }

        }
        catch (error)
        {
            console.error(error);
        }
    }
    const HandleCancel = () => {
        Navigate("/dashboard");
    };

            
    return (
        <>
            <MainNavigation/>
            <div className="container my-3">
                <div className='home-page-text-1'>
                    <h1>EDIT FYP INFORMATION</h1>
                </div>
            </div>
    
            <div className="container my-2">
                <select id='input-fy-2' placeholder='Project Type' required onChange={HandleElementChange}>
                    <option value="">-- Edit Details --</option>
                    <option value="projectTitle">Project Title</option>
                    <option value="projectType">Project Type</option>
                    <option value="shortTitle">Short Title</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="coSupervisor">Co-Supervisor</option>
                    <option value="projectDescription">Project Description</option>
                    <option value="testImage">Project Poster</option>
                </select>
            </div>
    
    
            <div className="container my-2">
            <form onSubmit={Submit}>
            {
                (ElementChange==="projectTitle")?
                    <div className="container my-2">
                        <input required type="text" placeholder="Project Title" name="projectTitle" id="input-fy"  label="Project Title" onChange={HandleProjectTitleValue}/> 
                    </div>
                : 
                (ElementChange==="projectType")?
                    <div className="container my-2">
                        <select id='input-fy-2' placeholder='Project Type' required onChange={HandleTypeChange}>
                            <option value="">-- Select Project Type --</option>
                            <option value="Development">Development</option>
                            <option value="Research">Research</option>
                        </select>
                    </div>
                :
                (ElementChange==="shortTitle")?
                    <div className="container my-2">
                        <input required type="text" placeholder="Short Title" name="shortTitle" id="input-fy-2"  label="Short Title" onChange={HandleShortTitleValue}/>
                    </div>
                :
                (ElementChange==="supervisor")?
                    <div className="container my-2">
                            <select id='input-fy-2' placeholder='Supervisor' required onChange={HandleSupervisorValue}>
                                <option value="">-- Select Supervisor --</option>
                                <option value="Mr. Umair Arshad">Mr. Umair Arshad</option>
                                <option value="Mr. Bilal Khalid">Mr. Bilal Khalid</option>
                                <option value="Dr. Javaria Imtiaz">Dr. Javaria Imtiaz</option>
                                <option value="Dr. Khubaib Amjad">Dr. Khubaib Amjad</option>
                                <option value="Mr. Shoaib Saleem Khattak">Mr. Shoaib Saleem Khattak</option>
                                <option value="Dr. Kifayat Ullah">Dr. Kifayat Ullah</option>
                                <option value="Dr. Labiba Fahad">Dr. Labiba Fahad</option>
                                <option value="Mr. Adil Majeed">Mr. Adil Majeed</option>
                                <option value="Dr. Mehreen Alam">Dr. Mehreen Alam</option>
                                <option value="Dr. Muhammad Aleem">Dr. Muhammad Aleem</option>
                                <option value="Dr. Muhammad Arshad Islam">Dr. Muhammad Arshad Islam</option>
                                <option value="Dr. Muhammad Asim">Dr. Muhammad Asim</option>
                                <option value="Dr. Naveed Ahmad">Dr. Naveed Ahmad</option>
                                <option value="Dr. Omer Beg">Dr. Omer Beg</option>
                                <option value="Dr. Qaiser Shafi">Dr. Qaiser Shafi</option>
                                <option value="Dr. Shujaat Hussain">Dr. Shujaat Hussain</option>
                                <option value="Dr. Akhtar Jamil">Dr. Akhtar Jamil</option>
                                <option value="Dr. Uzair Khan">Dr. Uzair Khan</option>
                                <option value="Dr. Zainab Abaid">Dr. Zainab Abaid</option>
                                <option value="Mr. Abdullah Abid">Mr. Abdullah Abid</option>
                                <option value="Mr. Shams Farooq">Mr. Shams Farooq</option>
                                <option value="Mr. Hassan Raza">Mr. Hassan Raza</option>
                                <option value="Mr. Jawad Hassan">Mr. Jawad Hassan</option>
                                <option value="Mr. Saad Salman">Mr. Saad Salman</option>
                                <option value="Mr. Rohail Gulbaz">Mr. Rohail Gulbaz</option>
                                <option value="Mr. Shehreyar Rashid">Mr. Shehreyar Rashid</option>
                                <option value="Mr. Shoaib Mehboob">Mr. Shoaib Mehboob</option>
                                <option value="Ms. Noor ul Ain">Ms. Noor ul Ain</option>
                                <option value="Ms. Amna Irum">Ms. Amna Irum</option>
                                <option value="Ms. Hina Binte Haq">Ms. Hina Binte Haq</option>
                                <option value="Ms. Humera Sabir">Ms. Humera Sabir</option>
                                <option value="Ms. Saba Naeem">Ms. Saba Naeem</option>
                                <option value="Ms. Sara Khan">Ms. Sara Khan</option>
                                <option value="Ms. Ayesha Naeem">Ms. Ayesha Naeem</option>
                                <option value="Ms. Aisha Jamil">Ms. Aisha Jamil</option>
                                <option value="Ms. Zainab Mahmood">Ms. Zainab Mahmood</option>
                                </select>
                    </div>
                :
                (ElementChange==="coSupervisor")?
                    <div className="container my-2">
                        <input type='text' placeholder='Co-Supervisor' name='co-supervisor' id='input-fy-2' label='Co-Supervisor' onChange={HandleCoSupervisorValue}/>
                    </div>
                :
                (ElementChange==="projectDescription")?
                    <div className="container my-2">
                        <textarea required placeholder="Add Description" className='form-control' rows="2" onChange={HandleProjectDescriptionValue}></textarea>
                    </div>
                :
                (ElementChange==="projectPoster")?
                <>
                    <div className="container my-2">
                        <input className="PostPicture" type="file"  onChange={handleFileChange} ref={fileInputRef} id="fileID" accept='image/psd' hidden/>
                        <button id="btn-upload" type="button" onClick={UploadFile}>Choose Poster Image</button>
                    </div>
                    <div id="container">
                        <span className="form-text">{fileName}</span>
                    </div>
                </>
                :   
                <></>
            }                    
            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
            <Button type="button" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}} onClick={HandleCancel}> CANCEL</Button>
            <ToastContainer />
            </form>
        </div>
        </>
    )            
 }


