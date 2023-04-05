import Workexp from "./work_exp";
import React from "react";
import '../assets/workfull.css';
import '../assets/edu.js';

class Fullwork extends React.Component {
   

    render() {
        return (
            <>
       <div class="heading">
    The Graduation Directory
   </div>
   <h2> Work experiences</h2>
<p>Please enter your work experiences in reverse chronological order</p>
<p>You can enter Maximum of 7 work experiences</p>
<p> Provide 1-2 sentences describing your roles and responsibilities</p>
<h2>Work Experience 1</h2>
<Workexp />
<h2>Work Experience 2</h2>
<Workexp />
<h2>Work Experience 3</h2>
<Workexp />
<h2>Work Experience 4</h2>
<Workexp />
<h2>Work Experience 5</h2>
<Workexp />
<h2>Work Experience 6</h2>
<Workexp />
<h2>Work Experience 7</h2>
<Workexp />
  
<div class="the_buttons">
    <input type="submit" value="Save"></input>
    <input type="submit" value="Next"></input>
    </div>

            </>




        );
    }
}
export default Fullwork;