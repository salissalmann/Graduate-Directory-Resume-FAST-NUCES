import React from 'react'
import MainNavigation from './MainNavigation'
import "./styles/PersonalInfo.css"
import {useState} from 'react'
import { Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function PersonalInfo()
{

  const Navigate = useNavigate()
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
  const handleFileChange = (event)    => { setFile(event.target.files[0]);};
  const HandleGPAValue = (event) => { SetGPA(event.target.value); };

  const Submit = async (e) => {
    e.preventDefault();
    toast.success("Please Wait...");
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("jobTitle", jobTitle);
    formData.append("linkedIn", linkedIn);
    formData.append("country", country);
    formData.append("city", city);
    formData.append('testImage', file);
    formData.append("GPA", GPA);
    try {
        const Response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/addDetails`, {
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
                <h1>PERSONAL INFORMATION</h1>
            </div>
        </div>


        <div className="container my-2">
            <form onSubmit={Submit}>
                <div className="container my-2">
                    <input required type="text" placeholder="First Name" name="firstName" id="input"  label="First Name" onChange={HandleFirstName}/>
                    <input required type="text" placeholder="Last Name"  name="lastName"  id="input"  label="Last Name"  onChange={HandleLastName} />
                </div>

                <div className="container my-2">
                    <input required type="email" placeholder="Email" name="email" id="input"  label="Email" onChange={HandleEmailValue}/>
                    <input required type="text"  placeholder="Phone" name="phone" id="input" label="Phone" onChange={HandlePhoneValue}/>
                </div>

                <div className="container my-2">
                    <input required type="text" placeholder="Occupation" name="jobTitle" id="input"  label="Wanted Job Title" onChange={HandleTitleValue}/>
                    <input required type="text" placeholder="LinkedIn"         name="linkedIn" id="input" label="LinkedIn"  onChange={HandleLinkedInValue}/>
                </div>

                <div className="container my-2">
                    <input required type="text" placeholder="City" name="city" id="input"  label="City" onChange={HandleCityValue}/>
                    <input type="text" placeholder="Country"       name="country"  id="input" label="Country"  onChange={HandleCountryValue}/>
                </div>

                <div className="container my-2">
                    <input required type="text" placeholder="CGPA" name="GPA" id="input-1"  label="GPA" onChange={HandleGPAValue}/>
                </div>

                <div id="container">
                    <input className="PostPicture" type="file"  onChange={handleFileChange} id="fileID" accept='image/png' hidden/>            
                    <button id="btn-upload" type="button" onClick={UploadFile}>Choose Display Image</button>
                </div>

                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
                <ToastContainer />
            </form>
        </div>

    </>
  )
}
