
import React from "react";
import '../assets/workfull.css';
import '../assets/edu.js';
import Interests from "./interests";

class Allinterests extends React.Component {
   

    render() {
        return (
            <>
       <div class="heading">
    The Graduation Directory
   </div>
   <h2> Interests</h2>
   <h3> Please write down your interests. Each entry should not be summed up in MAX 3 words</h3>


<Interests />

            </>




        );
    }
}
export default Allinterests;