import React, { useState , useContext} from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material'
import MainNavigation from './MainNavigation';
import "./styles/Education.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DirectoryContext from '../context/DirectoryContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MAX_EDUCATION = 3;
const MAX_DESCRIPTION_LENGTH = 150;

const Education = () => {
  const Context = useContext(DirectoryContext)



  const [education, setEducation] = useState([]);
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');


  const handleDelete = (id) => {
    Context.DeleteEducation(id);
  }

  useEffect(() => {
    const Run = async () => 
      {
        const Response = await fetch(`http://localhost:3001/education/GetEducation`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization-Token': localStorage.getItem('Token')
          }
        });
        const ResponseToJson = await Response.json();
        if (ResponseToJson.Success === true) {
          setEducation(ResponseToJson.education)
        }
      }
      Run()
  })

  
  const HandleCancel = () => {
    Navigate('/dashboard')
  }

  
  
  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (education.length >= MAX_EDUCATION) {
      toast.error("Cannot Add More than 3 Education Entries!");
      return;
    }
  
    if (
      institution.trim() === '' ||
      degree.trim() === '' ||
      startYear.trim() === '' ||
      description.trim() === ''
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      toast.error("Please provide a description length less than 150 characters.");
      return;
    }
  
    let endYearValue = endYear.trim();
    if (endYearValue === '') {
      endYearValue = "Current";
    }
  
    Context.AddEducation(institution, degree, startYear, endYear, description);
    setInstitution('');
    setDegree('');
    setStartYear('');
    setEndYear('');
    setDescription('');
  };

  const Navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    toast.success("Information Added Successfully!")
    Navigate('/dashboard');
  }


  return (
    <>
      <MainNavigation />
      <div className="container">
        <div className='home-page-text-1'>
          <h1>ADD EDUCATION <span className='span-home-text'>MAX-3</span></h1>
        </div>
      </div>

      <div className="container my-2">
        <form onSubmit={handleSubmit}>

          <div className="container my-2">
            <input required placeholder="Add Institution" type="text" name="institution" id="input-1-p" value={institution} label="Institution" onChange={handleInstitutionChange} />
          </div>

          <div className="container my-2">
            <input required placeholder="Add Degree" type="text" name="degree" id="input-1-p" value={degree} label="Degree" onChange={handleDegreeChange} />
          </div>

          <div className="container my-2">
            <input required placeholder="Add Start Year" type="date" name="startYear" id="input" value={startYear} onChange={handleStartYearChange} />
            <input  placeholder="Add End Year" type="date" name="endYear" id="input" value={endYear} label="End Year" onChange={handleEndYearChange} />
          </div>

           <div className="container" id="p-desc-box">
                <textarea required id="text-area-p" placeholder="Add Description" className='form-control' rows="2" value={description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div className="container">
                <h6 className='sign'>*If currently enrolled, leave End Date Empty</h6>
           </div>



          <div className="container">
          <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" ,marginLeft:"-1%", marginTop: "-1%"}}> Add Education</Button>
          </div>
        </form>
      </div>


    <div className="container my-2">
    {education.map((edu, index) => (
        <div className="container my-2" key={index} id='projects-display'>
            <div className="container my-2">
                <h6>Education: {edu.institution}</h6>
                <h6>Timeline: {edu.startYear} - {edu.endYear} </h6>
            </div>
            <div className="container my-2">
                <h6>Degree: {edu.degree}</h6>
                <h6>Description : {edu.description}</h6>
          </div>
          <button className="btn btn-danger" onClick={() => handleDelete(edu._id)}>Delete</button>
        </div>
        
    ))}
    </div>

    <form onSubmit={Submit}>
            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
            <Button type="button" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}} onClick={HandleCancel}> CANCEL</Button>
    </form>

      <ToastContainer />
    </>
  );
};

export default Education;
