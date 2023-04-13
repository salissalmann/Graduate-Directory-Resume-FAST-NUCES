import React from 'react';
import MainNavigation from './MainNavigation';
import "./styles/Description.css";
import { Box, Button , TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {useContext} from 'react';
import DirectoryContext from '../context/DirectoryContext';
import { useNavigate } from "react-router-dom";

export default function Description() {
 
    const [text, setText] = useState('');
    const Context = useContext(DirectoryContext)
    const Navigate = useNavigate()

    const OnChangeValue = (e) => {
    setText(e.target.value);
    }
  const Submit = async (e) => {
    e.preventDefault();
    const words = text.trim().split(/\s+/); // Split input by whitespace to get words
    if(words.length < 100)
    {
      Context.AddDescription(text);    
      toast.success("Information Added Successfully!")
      Navigate('/dashboard')
    }
    else
    {
       console.log("Error occured")
    }
  }

  return (
    <>
      <MainNavigation />
      <div className="container my-3">
        <div className='home-page-text-1'>
          <h1>DESCRIPTION</h1>
        </div>
      </div>

      <div className="container my-3">
        <div className='home-page-text-desc'>
          <h3>Write a short description about yourself</h3>
        </div>
      </div>

      <div className="container my-3">
        <div className='mb-3 my-3'>
          <textarea id="text-area" className='form-control' rows="4" value={text} onChange={OnChangeValue}></textarea>
        </div>
      </div>

      <form onSubmit={Submit}>
            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"50%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
            <ToastContainer />
        </form>

    </>
  )
}
