import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import DirectoryContext from "../context/DirectoryContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const Context = useContext(DirectoryContext);
  
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const Navigate = useNavigate();

  const HandleEmailValue = (event) => {
    SetEmail(event.target.value);
  };
  const HandlePasswordValue = (event) => {
    SetPassword(event.target.value);
  };

  const Submit = async (e) => 
  {
    e.preventDefault();
    const Response = await fetch(`http://localhost:3001/student/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const ResponseToJson = await Response.json();
    if (ResponseToJson.Success) {
      toast.success("Login Successful");
      localStorage.setItem("Token", ResponseToJson.AuthToken)
      Context.SetAuthToken(ResponseToJson.AuthToken);
      Navigate("/dashboard");
    }
    else 
    {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
     <Box>
          <Box padding="1vw" backgroundColor={"black"}  textAlign="center" >
            <Typography color="#69D4C6" fontWeight="600" fontSize="2rem"> Graduate Directory Resume</Typography>
          </Box>
          <div className="container my-2">
            <Typography color="#69D4C6" fontWeight="bold" fontSize="2rem" textAlign={"center"} marginTop="4vw"> Login to your Account </Typography>
            <Typography color="#69D4C6" fontWeight="700px" fontSize="1.3rem" marginTop="1vw" marginBottom="2rem"> Enter Account Information </Typography>
            <form onSubmit={Submit}>
                <div className="row">
                    <div className='col-lg-12'>
                       <TextField name="email"     id="email"      label="Email"      onChange={HandleEmailValue}  sx={{width:"30%"}}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className='col-lg-12'>
                        <TextField name="password"  id="password"   label="Password"   onChange={HandlePasswordValue}   sx={{width:"30%"}}/>
                    </div>
                </div>

                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#69D4C6", color:"white", width:"30%" , marginTop:"1%"}}> Login </Button>
            </form>
        </div>
        <ToastContainer />
        </Box>
    </>
  );
}
