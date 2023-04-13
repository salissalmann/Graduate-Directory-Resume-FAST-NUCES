import React from 'react'
import MainNavigation from './MainNavigation'
import "./styles/Skills.css"
import {useState } from 'react'
import { Box, Button , TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Skills()
{
    
    const Navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const Submit = async (e) => {
        e.preventDefault();
        toast.success("Skills Added Successfully");
        Navigate('/dashboard');
    }
    
    const handleAddSkill = async () => {
      if (skills.length >= 15) 
      {
        alert('You cannot add more than 15 skills.');
        return;
      }
  
      if (newSkill.trim() !== '') 
      {
        setSkills([...skills, newSkill]);

        const Response = await fetch( `http://localhost:3001/handledata/AddSkills/${newSkill.toUpperCase()}`,
        {
          method: "PUT",
          headers:
          { 'Content-Type' : 'application/json',
            'Authorization-Token' : localStorage.getItem('Token')       
          }
        });
        const ResponseToJson = await Response.json();
        if(ResponseToJson.Success===true)
        {
           toast.success("Skill Added Successfully");
        }
        setNewSkill('');
      }
    };
  
    const handleDeleteSkill = async (index,skill) => {
      setSkills(skills.filter((_, i) => i !== index));
      const Response = await fetch( `http://localhost:3001/handledata/DeleteSkills/${skill.toUpperCase()}`,
      {
        method: "PUT",
        headers:
        { 'Content-Type' : 'application/json',
          'Authorization-Token' : localStorage.getItem('Token')
        },
      });
      const ResponseToJson = await Response.json();
      if(ResponseToJson.Success===true)
      {
         toast.success("Skill Deleted Successfully");
      }
    }
      
    return (
      
      <div>
        <MainNavigation/>
        <div className="container my-3">
            <div className='home-page-text-1'>
                <h1>ADD SKILLS</h1>
            </div>
        </div>

        <div className="container my-2">
            <input type="text" placeholder="i.e React" name="Skill" id="input" value={newSkill}  label="Skill"  onChange={(e) => setNewSkill(e.target.value)}/>
        </div>
        <div className="container my-2">
            <Button type="button" padding= "1rem"  onClick={handleAddSkill} sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-2%"}}> Add Skill</Button>
        </div>


        <div className="container">
            <div className="container my-5" id="Skill-Box">
                {skills.map((skill, index) => (
                    <div key={index} id="skill">
                        
                        <div className="skill-name">{skill.toUpperCase()}  <AiFillDelete onClick={() => handleDeleteSkill(index,skill)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <form onSubmit={Submit}>
                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
                <ToastContainer />
            </form>

    </div>
    );
  }