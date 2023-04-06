import Workexp from "./work_exp";
import React from "react";
import '../assets/workfull.css';
import '../assets/edu.js';
import Projects from "./projects";

class Allprojects extends React.Component {
   

    render() {
        return (
            <>
       <div class="heading">
    The Graduation Directory
   </div>
   <h2> Semester Projects</h2>
<p>Please enter your work experiences in reverse chronological order</p>

<h2>Semester Project 1</h2>
<Projects />
<h2>Semester Project  2</h2>
<Projects />
<h2>Semester Project 3</h2>
<Projects />
<h2>Semester Project 4</h2>
<Projects />
<h2>Semester Project 5</h2>
<Projects />

  
<div class="the_buttons">
    <input type="submit" value="Save"></input>
    <input type="submit" value="Next"></input>
    </div>

            </>




        );
    }
}
export default Allprojects;