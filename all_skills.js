import Workexp from "./work_exp";
import React from "react";
import '../assets/workfull.css';
import '../assets/edu.js';
import Skills from "./skills";

class Allskills extends React.Component {
   

    render() {
        return (
            <>
       <div class="heading">
    The Graduation Directory
   </div>
   <h2> Skills</h2>
   <h3> Professional Skills</h3>


<Skills />
<h3> Technical Skills</h3>
<Skills />

  
<div class="the_buttons">
    <input type="submit" value="Save"></input>
    <input type="submit" value="Next"></input>
    </div>

            </>




        );
    }
}
export default Allskills;