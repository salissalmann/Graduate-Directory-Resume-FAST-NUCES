import React from "react";
import '../assets/work_exp.css';
import '../assets/edu.js';

class Skills extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            skill1: "",
            skill2: "",
            skill3: "",
            skill4: "",
            skill5: "",
            skill6: ""            
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
            <label for="name"> Skill 1</label>
            <input type="text" id="skill1" name="name" value={this.state.projectname}
            onChange={this.handleInputChange} required></input>
          </div>
          
    
   
        
       
        <div class="basic_info">
            
            <div class="form-group ">
                <label for="name"> skill 2</label>
                <input type="text" id="skill2" name="name" value={this.state.projectdescription}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>

         
               
          </div>
          <div class="the_whole"> 
        
        <div class="form-group">
            <label for="name"> Skill 3</label>
            <input type="text" id="skill3" name="name" value={this.state.projectname}
            onChange={this.handleInputChange} required></input>
          </div>
          
    
    
        
       
        <div class="basic_info">
            
            <div class="form-group ">
                <label for="name"> skill 4</label>
                <input type="text" id="skill4" name="name" value={this.state.projectdescription}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>

         
               
          </div>

          <div class="the_whole"> 
        
        <div class="form-group">
            <label for="name"> Skill 5</label>
            <input type="text" id="skill5" name="name" value={this.state.projectname}
            onChange={this.handleInputChange} required></input>
          </div>
          
    
    
        
       
        <div class="basic_info">
            
            <div class="form-group ">
                <label for="name"> skill 6</label>
                <input type="text" id="skill6" name="name" value={this.state.projectdescription}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>

         
               
          </div>
          </div>

    
    
   

          </form>
    







  

            </>




        );
    }
}
export default Skills;