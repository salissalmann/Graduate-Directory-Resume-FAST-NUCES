import React from "react";
import '../assets/work_exp.css';
import '../assets/edu.js';

class Projects extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            projectname: "",
            projectdescription: "",
            
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
             



<form action="#" method="post">
    <div class="everything">
        
    <div class="the_whole"> 
        
        <div class="form-group">
            <label for="name"> Project Name</label>
            <input type="text" id="ProjectName" name="name" value={this.state.projectname}
            onChange={this.handleInputChange} required></input>
          </div>
          
    
    <div class="the_firstline">
        
       
        <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> Project Description</label>
                <input type="text" id="Projectdescription" name="name" value={this.state.projectdescription}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>

          </div>
               
          </div>
          </div>

    
    
   

          </form>
    







  

            </>




        );
    }
}
export default Projects;