import React from 'react';
import MainNavigation from './MainNavigation';
import "./styles/Description.css";
import { Box, Button , TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import {useContext} from 'react';
import DirectoryContext from '../context/DirectoryContext';
import { useNavigate } from "react-router-dom";

export default function Description() {

    const [RunEffect, setRunEffect] = useState(false)
    useEffect( () =>
    {
        const Run = async () =>
        {
            Context.GetDescription()
            setRunEffect(true)
        }
        if (RunEffect===false)
        {
            Run()
        }
    })

    const HandleCancel = () => {
        Navigate('/dashboard')
    }
    

    const [text, setText] = useState('');
    const Context = useContext(DirectoryContext)
    const Navigate = useNavigate()

    const OnChangeValue = (e) => {
    setText(e.target.value);
    }
  const Submit = async (e) => {
    e.preventDefault();
    const words = text.trim().split(/\s+/); // Split input by whitespace to get words
    if(words.length >= 100)
    {
      toast.error("Please enter less than 100 words")
      return;
    }

    if(words.length < 100)
    {
      Context.EditDescription(text);    
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

      <div className="container my-3" id="your-desc-box">
        <div className='home-page-text-desc-1' id="xyz" >
            <h6>Your Description</h6>
        </div>
        <div className='home-page-text-desc-yours'>
            {Context.Description && <h6>{Context.Description}</h6>}
        </div>
    </div>
    

      <div className="container my-3">
        <div className='mb-3 my-3'>
          <textarea id="text-area" placeholder="Write your new description here..."className='form-control' rows="4" value={text} onChange={OnChangeValue}></textarea>
        </div>
      </div>

      <form onSubmit={Submit}>
            <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
            <Button type="button" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"25%" , marginTop:"1%" ,marginLeft:"1%"}} onClick={HandleCancel}> CANCEL</Button>
            <ToastContainer />
        </form>

    </>
  )
}
