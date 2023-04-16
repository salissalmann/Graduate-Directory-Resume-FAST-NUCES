import React, { useState } from "react";
import DirectoryContext from "./DirectoryContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DirectoryStates = (props)=>
{
    const [AuthToken , SetAuthToken] = useState("");
    const [CheckFYP , SetCheckFYP] = useState(false);

    const CheckFYPStatus = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/fyp/GetFYPStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetCheckFYP(false);
        }
        else
        {
            SetCheckFYP(true);
        }
    }



    const AddDescription = async (description)=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/description/AddDescription`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),                
            },
            body: JSON.stringify({
                description
            })
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Description Added Successfully");
        }
    }





    const AddProject = async (title, link, description)=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/projects/AddProject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),                
            },
            body: JSON.stringify({
                title, link, description
            })
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Project Added Successfully");
        }
        else
        {
            console.log("An Error Occured")
        }
    }

    const AddEducation = async (institution, degree, startYear, endYear, description)=>
    {
        if (endYear === "")
        {
            endYear = "Present";
        }
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/education/AddEducation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),                
            },
            body: JSON.stringify({
                institution, degree, startYear, endYear, description
            })
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Education Added Successfully");
        }
        else
        {
            console.log("An Error Occured")
        }
    }

    const AddWorkExperience = async (company, position, startYear, endYear, description)=>
    {
        if (endYear === "")
        {
            endYear = "Present";
        }
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/workexperience/AddWorkExperience`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            },
            body: JSON.stringify({
                company, position, startYear, endYear, description
            })
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Work Experience Added Successfully");
        }
        else
        {
            console.log("An Error Occured")
        }
    }

    const AddFYP = async (member1Email, member2Email, member3Email, shortTitle, projectTitle, projectType, projectDescription, supervisor, coSupervisor)=>
    {
        member1Email = member1Email.toLowerCase();
        member2Email = member2Email.toLowerCase();
        member3Email = member3Email.toLowerCase();
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/fyp/AddFYP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            },
            body: JSON.stringify({
                member1Email, member2Email, member3Email, shortTitle, projectTitle, projectType, projectDescription, supervisor, coSupervisor
            })
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("FYP Added Successfully");
        }
        else
        {
            console.log("An Error Occured")
        }
    }

    const [PersonalInfo , SetCheckPersonalInfo] = useState(false);

    const CheckPersonalInfo = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/CheckPersonalInfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.success)
        {
            if(json.Found)
            {
                
                SetCheckPersonalInfo(true);
            }
            else
            {
                SetCheckPersonalInfo(false);
            }
        }
        else
        {
            console.log("An Error Occured")
        }
    }

    const [SkillsStatus , SetSkillsStatus] = useState(false);
    const CheckSkills = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/handledata/CheckSkills`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetSkillsStatus(true);
        }
        else
        {
            SetSkillsStatus(false);
        }
    }

    const [EducationStatus , SetEducationStatus] = useState(false);
    const CheckEducation = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/education/GetEducationStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetEducationStatus(true);
        }
        else
        {
            SetEducationStatus(false);
        }
    }

    const [WorkExperienceStatus , SetWorkExperienceStatus] = useState(false);
    const CheckWorkExperience = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/workexperience/GetWorkExperienceStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetWorkExperienceStatus(true);
        }
        else
        {
            SetWorkExperienceStatus(false);
        }
    }

    const [ProjectsStatus , SetProjectsStatus] = useState(false);
    const CheckProjects = async ()=>
    {

        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/projects/GetProjectStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetProjectsStatus(true);
        }
        else
        {
            SetProjectsStatus(false);
        }
    }

    const [DescriptionStatus , SetDescriptionStatus ] = useState(false);

    const CheckDescription = async ()=>
    {
        const response =  await fetch(`http://${process.env.REACT_APP_IPADDRESS}/description/GetDescriptionStatus`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetDescriptionStatus(true)
        }
        else
        {
            SetDescriptionStatus(false)
        }
    }


    return (
        <DirectoryContext.Provider value={{ AuthToken , DescriptionStatus , CheckDescription, SetAuthToken , AddProject , AddEducation , AddWorkExperience , AddFYP , CheckFYP , CheckFYPStatus , PersonalInfo , CheckPersonalInfo , SkillsStatus , CheckSkills , EducationStatus , CheckEducation , CheckWorkExperience , WorkExperienceStatus , ProjectsStatus , CheckProjects , AddDescription }}>
            {props.children}
        </DirectoryContext.Provider>
    )
}

export default DirectoryStates;