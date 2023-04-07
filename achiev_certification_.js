import React from "react";
import '../assets/long_desc.css';
import '../assets/edu.js';

class Longdesc extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            one: "",
            two: "",
            three: "",
            four: "",
            five: "",
            
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
        
        
    
    <div class="the_firstline">
        
       
        <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> 1</label>
                <input type="text" id="one" name="name" value={this.state.one}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>
          <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> 2</label>
                <input type="text" id="two" name="name" value={this.state.two}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>
          <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> 3</label>
                <input type="text" id="three" name="name" value={this.state.three}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>
          <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> 4</label>
                <input type="text" id="four" name="name" value={this.state.four}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>
          <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> 5</label>
                <input type="text" id="five" name="name" value={this.state.five}
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
export default Longdesc;