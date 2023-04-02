import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() 
{
  return (
    <>
        <nav className="navbar bg-body-tertiary" id="navigation">
            <div className="container-fluid">
                <a className="navbar-brand mx-5" href=' ' id="navigation-title"> Graduate Directory Resume</a>
                <Link to="/Login" ><button className="btn btn-outline" id='l-btn'>Login</button></Link>
            </div>
        </nav>                



    </>
    


  )
}
