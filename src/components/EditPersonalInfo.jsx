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
  const [firstName, SetFirstName] = useState();
  const [lastName, SetLastName] = useState();
  const [email, SetEmail] = useState();
  const [phone, SetPhone] = useState();
  const [jobTitle, SetTitle] = useState();
  const [linkedIn, SetLinkedIn] = useState();
  const [country, SetCountry] = useState();
  const [city , SetCity] = useState();
  const [file , setFile ] = useState();
  const [GPA , SetGPA ] = useState();
  const [ElementChange, SetElementChange] = useState("");

  const UploadFile = ()=>
  {
        document.getElementById("fileID").click();
  }
  
  const HandleFirstName = (event)     => { SetFirstName(event.target.value);};
  const HandleLastName = (event)      => { SetLastName(event.target.value); };
  const HandleEmailValue = (event)    => { SetEmail(event.target.value);    };
  const HandlePhoneValue = (event)    => { SetPhone(event.target.value); };
  const HandleTitleValue = (event)    => { SetTitle(event.target.value); };
  const HandleLinkedInValue = (event) => { SetLinkedIn(event.target.value); };
  const HandleCountryValue = (event)  => { SetCountry(event.target.value); }; 
  const HandleCityValue = (event)     => { SetCity(event.target.value); };
  const HandleElementChange = (event) => { SetElementChange(event.target.value); };  
  const handleFileChange = (event)    => { 
    setFile(event.target.files[0])
    const file = event.target.files[0];
    if (file) {
        setFile(file);
        setFileName(file.name);
      } else {
        setFile(null);
        setFileName("");
      }
    ;};
  const HandleGPAValue = (event) => { SetGPA(event.target.value); };

  const HandleCancel = () => {
    Navigate('/dashboard')
    }
    
  const Submit = async (e) => {
    e.preventDefault();
    toast.success("Please Wait...");
    const formData = new FormData();
    formData.append("change", ElementChange);
    if (ElementChange==="name")
    {
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
    }
    else if (ElementChange==="email")
    {
      formData.append("email", email);
    }
    else if (ElementChange==="phone")
    {
      formData.append("phone", phone);
    }
    else if (ElementChange==="jobTitle")
    {
      formData.append("jobTitle", jobTitle);
    }
    else if (ElementChange==="linkedIn")
    {
      formData.append("linkedIn", linkedIn);
    }
    else if (ElementChange==="city")
    {
      formData.append("city", city);
    }
    else if (ElementChange==="country")
    {
      formData.append("country", country);
    }
    else if (ElementChange==="GPA")
    {
      formData.append("GPA", GPA);
    }
    else if (ElementChange==="testImage")
    {
      formData.append('testImage', file);
    }

    try {
        const Response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/UpdatePersonalInfo`, {
            method: 'POST',
            headers: {
                'Authorization-Token': localStorage.getItem("Token"),
            },
            body: formData,
        });
        const ResponseToJson = await Response.json();
        if (ResponseToJson.success===true)
        {
            toast.success("Details Added Successfully");
            Navigate("/dashboard");
        }

    } catch (error) 
    {
        console.error(error);
    }
};

return (
    <>
        <MainNavigation/>
        <div className="container my-3">
            <div className='home-page-text-1'>
                <h1>EDIT PERSONAL INFORMATION</h1>
            </div>
        </div>

        <div className="container my-2">
            <select id='input-fy-2' placeholder='Project Type' required onChange={HandleElementChange}>
                <option value="">-- Edit Details --</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="jobTitle">Job Title</option>
                <option value="linkedIn">LinkedIn</option>
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="GPA">GPA</option>
                <option value="testImage">Image</option>
            </select>
        </div>

        

        <div className="container my-2">
            <form onSubmit={Submit}>
            { 
            (ElementChange==="name")?
            (
                <div className="container my-2">
                    <input required type="text" placeholder="First Name" name="firstName" id="input"  label="First Name" onChange={HandleFirstName}/>
                    <input required type="text" placeholder="Last Name"  name="lastName"  id="input"  label="Last Name"  onChange={HandleLastName} />
                </div>
            ):(ElementChange==="email")?
                <div className="container my-2">
                    <input required type="email" placeholder="Email" name="email" id="input"  label="Email" onChange={HandleEmailValue}/>
                </div>
            : (ElementChange==="phone")?
                <div className="container my-2">
                    <input required type="text"  placeholder="Phone" name="phone" id="input" label="Phone" onChange={HandlePhoneValue}/>
                </div>
            : (ElementChange==="jobTitle")?
               <div className="container my-2">
                    <input required type="text" placeholder="Occupation" name="jobTitle" id="input"  label="Wanted Job Title" onChange={HandleTitleValue}/>
                </div>
            : (ElementChange==="linkedIn")?
                <div className="container my-2">
                    <input required type="text" placeholder="LinkedIn" name="linkedIn" id="input"  label="LinkedIn" onChange={HandleLinkedInValue}/>
                </div>
            : (ElementChange==="city")?
                <div className="container my-2">
                    <input required type="text" placeholder="City" name="city" id="input"  label="City" onChange={HandleCityValue}/>
                </div>
            : (ElementChange==="country")?
                <div className="container my-2">
                    <input required type="text" placeholder="Country" name="country" id="input"  label="Country" onChange={HandleCountryValue}/>
                </div>
            : (ElementChange==="GPA")?
                <div className="container my-2">
                    <input required type="text" placeholder="GPA" name="GPA" id="input"  label="GPA" onChange={HandleGPAValue}/>
                </div>
            : (ElementChange==="testImage")?
                <>
                <div className="container my-2">
                    <input className="PostPicture" type="file"  onChange={handleFileChange} ref={fileInputRef} id="fileID" accept='image/*' hidden/>
                    <button id="btn-upload" type="button" onClick={UploadFile}>Choose Display Image</button>
                </div>
                <div id="container">
                    <span className="form-text">{fileName}</span>
                </div>
                </>
            :<></>
            }

            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
            <Button type="button" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}} onClick={HandleCancel}> CANCEL</Button>
            <ToastContainer />
            </form>
        </div>

    </>
  )
}
