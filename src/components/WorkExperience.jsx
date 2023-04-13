import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material'
import MainNavigation from './MainNavigation';
import "./styles/WorkExperience.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext} from 'react';
import DirectoryContext from '../context/DirectoryContext';
import { useNavigate } from "react-router-dom";

const MAX_WORK_EXPERIENCE = 3;
const MAX_DESCRIPTION_LENGTH = 150;

const WorkExperience = () => {
  const Context = useContext(DirectoryContext)

  const [workExperience, setWorkExperience] = useState([]);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (workExperience.length >= MAX_WORK_EXPERIENCE) {
      toast.error("Cannot Add More than 3 Work Experience Entries!");
      return;
    }
  
    if (
      company.trim() === '' ||
      position.trim() === '' ||
      startDate.trim() === '' ||
      description.trim() === ''
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      toast.error("Please provide a description length less than 150 characters.");
      return;
    }
  
    let endDateValue = endDate.trim();
    if (endDateValue === '') {
      endDateValue = "Present";
    }
  
    const newWorkExperience = {
      company: company.trim(),
      position: position.trim(),
      startDate: startDate.trim(),
      endDate: endDateValue,
      description: description.trim(),
    };
  
    setWorkExperience([...workExperience, newWorkExperience]);
    Context.AddWorkExperience(company, position, startDate, endDate, description);
    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  const Navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('workExperience', workExperience);
    toast.success("Information Added Successfully!")
    Navigate('/dashboard');
  }

  return (
    <>
      <MainNavigation />
      <div className="container">
        <div className='home-page-text-1'>
          <h1>ADD WORK EXPERIENCE <span className='span-home-text'>MAX-3</span></h1>
        </div>
      </div>

      <div className="container my-2">
        <form onSubmit={handleSubmit}>

          <div className="container my-2">
            <input required placeholder="Add Position" type="text" name="position" id="input-1-p" value={position} label="Position" onChange={handlePositionChange} />
          </div>

          <div className="container my-2">
          <input required placeholder="Add Company" type="text" name="company" id="input-1-p" value={company} label="Company" onChange={handleCompanyChange} />
        </div>

        <div className="container my-2">
          <input required placeholder="Add Start Year i.e; 2021" type="text" name="startYear" id="input" value={startDate} onChange={handleStartDateChange} />
          <input placeholder="Add End Year i.e; 2023" type="text" name="endYear" id="input" value={endDate} label="End Year" onChange={handleEndDateChange} />
        </div>

        <div className="container" id="p-desc-box">
          <textarea id="text-area-p" required placeholder="Add Description" className='form-control' rows="2" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="container">
          <h6 className='sign'>*If currently employed, leave End Date Empty</h6>
        </div>

        <div className="container">
          <Button type="submit" padding="2rem" sx={{ backgroundColor: "#69D4C6", color: "white", width: "50%", marginLeft: "-1%", marginTop: "-1%" }}> Add Work Experience</Button>
        </div>


        <ToastContainer />
        </form>
      </div>

      <div className="container my-2">
        {workExperience.map((workExp, index) => (
          <div className="container my-2" key={index} id='projects-display'>
            <div className="container my-2">
              <h6>Company: {workExp.company}</h6>
              <h6>Timeline: {workExp.startDate} - {workExp.endDate} </h6>
            </div>
            <div className="container my-2">
              <h6>Position: {workExp.position}</h6>
              <h6>Description : {workExp.description}</h6>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={Submit}>
        <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
    </form>

    </>
  );
};

export default WorkExperience;
