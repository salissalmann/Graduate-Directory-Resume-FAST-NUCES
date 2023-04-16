import React, { useState } from "react";
import DirectoryContext from "./DirectoryContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DirectoryStates = (props)=>
{
    const [AuthToken , SetAuthToken] = useState("");
    const [CheckFYP , SetCheckFYP] = useState(false);

    const CheckFYPStatus = async ()=>
    {
        const response = await fetch(`http://localhost:3001/fyp/GetFYPStatus`, {
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
        const response = await fetch(`http://localhost:3001/description/AddDescription`, {
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
        const response = await fetch(`http://localhost:3001/projects/AddProject`, {
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
        const response = await fetch(`http://localhost:3001/education/AddEducation`, {
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
        const response = await fetch(`http://localhost:3001/workexperience/AddWorkExperience`, {
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

    const AddFYP = async (formData)=>
    {
        const response = await fetch(`http://localhost:3001/AddFYP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            },
            body: formData
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
        const response = await fetch(`http://localhost:3001/CheckPersonalInfo`, {
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
        const response = await fetch(`http://localhost:3001/handledata/CheckSkills`, {
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
        const response = await fetch(`http://localhost:3001/education/GetEducationStatus`, {
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
        const response = await fetch(`http://localhost:3001/workexperience/GetWorkExperienceStatus`, {
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

        const response = await fetch(`http://localhost:3001/projects/GetProjectStatus`, {
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
        const response =  await fetch(`http://localhost:3001/description/GetDescriptionStatus`, {
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

    const EditDescription = async (description)=>
    {
        const response = await fetch(`http://localhost:3001/description/UpdateDescription`, {
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

    const [Description , SetDescription] = useState("");
    const GetDescription = async ()=>
    {
        const response = await fetch(`http://localhost:3001/description/GetDescription`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetDescription(json.descriptionText);
        }
    }

    const DeleteEducation = async (id)=>
    {
        const response = await fetch(`http://localhost:3001/education/DeleteEducation/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Education Deleted Successfully");
        }
    }

    const DeleteWorkExperience = async (id)=>
    {
        const response = await fetch(`http://localhost:3001/workexperience/DeleteWorkExperience/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Work Experience Deleted Successfully");
        }
    }

    const DeleteProject = async (id)=>
    {
        const response = await fetch(`http://localhost:3001/projects/DeleteProject/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            toast.success("Project Deleted Successfully");
        }
    }


    
    const [PersonalDetails , SetPersonalDetails] = useState()
    const UserDetails = async ()=>
    {
        const response = await fetch(`http://localhost:3001/GetPersonalInfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetPersonalDetails(json.PersonalDetails);
        }
    }
    
    const [Skills , SetSkills] = useState([]);
    const GetSkills = async ()=>
    {
        const Response = await fetch( `http://localhost:3001/handledata/GetSkills`,
        {
            method: "GET",
            headers:
            { 'Content-Type' : 'application/json',
                'Authorization-Token' : localStorage.getItem('Token')
            }
        });
        const ResponseToJson = await Response.json();
        if(ResponseToJson.Success===true)
        {
            SetSkills(ResponseToJson.Skills)
        }
    }

    const [Education , SetEducation] = useState([]);
    const GetEducation = async ()=>
    {
        const Response = await fetch( `http://localhost:3001/education/GetEducation`,
        {
            method: "GET",
            headers:
            { 'Content-Type' : 'application/json',
                'Authorization-Token' : localStorage.getItem('Token')
            }
        });
        const ResponseToJson = await Response.json();
        if(ResponseToJson.Success===true)
        {
            SetEducation(ResponseToJson.education)
        }
    }

    const [WorkExperience, SetWorkExperience] = useState([]);
    const GetWorkExperience = async ()=>
    {
        const Response = await fetch(`http://localhost:3001/workExperience/GetWorkExperience`, {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            'Authorization-Token': localStorage.getItem('Token')
            }
        });
        const ResponseToJson = await Response.json();
        if (ResponseToJson.Success === true) {
            SetWorkExperience(ResponseToJson.workExperience)
        }
    }

    const [Projects , SetProjects] = useState([]);
    const GetProjects = async ()=>
    {
        const Response = await fetch( `http://localhost:3001/projects/GetProjects`,
        {
            method: "GET",
            headers:
            { 'Content-Type' : 'application/json',
                'Authorization-Token' : localStorage.getItem('Token')
            }
        });
        const ResponseToJson = await Response.json();
        if(ResponseToJson.Success===true)
        {
            SetProjects(ResponseToJson.project)
        }
    }

    const [FYP , SetFYP] = useState([]);
    const GetFYP = async ()=>
    {
        const Response = await fetch( `http://localhost:3001/fyp/GetFYP`,
        {
            method: "GET",
            headers:
            { 'Content-Type' : 'application/json',
                'Authorization-Token' : localStorage.getItem('Token')
            }
        });
        const ResponseToJson = await Response.json();
        if(ResponseToJson.Success===true)
        {
            SetFYP(ResponseToJson.fyp)
        }
    }

    return (
        <DirectoryContext.Provider value={{ FYP,GetFYP,Projects,GetProjects, GetWorkExperience,WorkExperience,Education,GetEducation,GetSkills, Skills ,PersonalDetails , UserDetails ,AuthToken , DeleteEducation, DeleteWorkExperience , DeleteProject ,GetDescription , Description , DescriptionStatus , CheckDescription, EditDescription , SetAuthToken , AddProject , AddEducation , AddWorkExperience , AddFYP , CheckFYP , CheckFYPStatus , PersonalInfo , CheckPersonalInfo , SkillsStatus , CheckSkills , EducationStatus , CheckEducation , CheckWorkExperience , WorkExperienceStatus , ProjectsStatus , CheckProjects , AddDescription }}>
            {props.children}
        </DirectoryContext.Provider>
    )
}

export default DirectoryStates;