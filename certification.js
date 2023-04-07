import Workexp from "./work_exp";
import React from "react";
import '../assets/workfull.css';
import '../assets/edu.js';

import Longdesc from "./achiev_certification_";

class Certification extends React.Component {
   

    render() {
        return (
            <>
       <div class="heading">
    The Graduation Directory
   </div>
   <h2>Certification and Trainings</h2>
   <h3> Enter your any certifications or training you might have </h3>
   <h3> Please enter these prioritywise with 1 being highest priority </h3>
   <h3> Not all of them might make it on the final resume</h3>


<Longdesc />


  
<div class="the_buttons">
    <input type="submit" value="Save"></input>
    <input type="submit" value="Next"></input>
    </div>

            </>




        );
    }
}
export default Certification;