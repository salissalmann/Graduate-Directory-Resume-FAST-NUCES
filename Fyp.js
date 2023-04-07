import React from "react";
import '../assets/fyp.css';
import '../assets/edu.js';

class FYP extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            projectname: "",
            projectdescription: "",
            techused: ""
            
        };
        // Bind the functions to the component instance
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // Update the state object with the new values
        this.setState({
            [name]: value
        });
    }

    

    handleSubmit(event) {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Log the form data to the console
        console.log(this.state);
    }

    render() {
        
        return (
            <>
              <div class="heading">
    The Graduation Directory
   </div>
   <h2> FYP Details</h2>
   <h3> please add concise details of 2-3 sentences summing your entire project</h3>

             <div class="everything">
        
        <div class="the_whole"> 
            
            <div class="form-group">
                <label for="name"> Project Name</label>
                <input type="text" id="ProjectName" name="name" value={this.state.projectname}
                onChange={this.handleInputChange} required></input>
              </div>
              
              <div class="form-group">
                <label for="name"> Main technology used</label>
                <input type="text" id="techused" name="name" value={this.state.techused}
                onChange={this.handleInputChange} required></input>
              </div>
              
        
                   
              </div>
             
            
           
            <div class="basic_info">
                
                <div class="form-group role">
                    <label for="name"> Project Description</label>
                    <textarea type="text" rows="2" cols="1"  id="Projectdescription" name="name" value={this.state.projectdescription}
                onChange={this.handleInputChange} required></textarea >
                  </div>
            
              </div>
              
    
             
              </div>

              <div class="the_buttons">
    <input type="submit" value="Save"/>
    <input type="submit" value="Next"/>
   
    
    </div>

          






  

            </>




        );
    }
}
export default FYP ;