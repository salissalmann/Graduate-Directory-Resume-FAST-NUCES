import React from "react";
import '../assets/work_exp.css';
import '../assets/edu.js';

class Workexp extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            company: "",
            roleDesc: "",
            startDate: "",
            endDate: "",
            startMonth: "",
            endMonth: ""

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

    handleStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
      }
    
      handleEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
      }
      handleStartMonthChange = (event) => {
        this.setState({ startDate: event.target.value });
      }
    
      handleEndMonthChange = (event) => {
        this.setState({ endDate: event.target.value });
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
             

<div>
<div>
   
   </div>
</div>


<form action="#" method="post">
    <div class="everything">
        
    <div class="the_whole"> 
        
        <div class="form-group">
            <label for="name"> Position</label>
            <input type="text" id="position1" name="name" value={this.state.position}
            onChange={this.handleInputChange} required></input>
          </div>
          <div class="form-group">
            <label for="name"> Company</label>
            <input type="text" id="Companyname" name="name" value={this.state.position}
            onChange={this.handleInputChange} required></input>
          </div>
    
    <div class="the_firstline">
        
       
        <div class="basic_info">
            
            <div class="form-group role">
                <label for="name"> Role Description</label>
                <input type="text" id="role_desc" name="name" value={this.state.roleDesc}
            onChange={this.handleInputChange} required></input>
              </div>
        
          </div>

         
               
          <div class="start">
           
                <div class="basic_info">
                    
                <div class="custom-select" >
                    <select value={this.state.startDate} onChange={this.handleStartDateChange}>
                      <option value="0">Start Date</option>
                      <option value="1">1</option>
                      <option value="3">2</option>
                      <option value="2">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
    
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
    
                      <option value="2">20</option>
                      <option value="2">21</option>
                      <option value="2">22</option>
                      <option value="2">23</option>
                      <option value="2">24</option>
                      <option value="2">25</option>
                      <option value="2">26</option>
                      <option value="2">28</option>
                      <option value="2">29</option>
                      <option value="2">30</option>
                      <option value="2">31</option>
    
    
                      
                    </select>
            </div>
            
              </div>
        
              <div class="basic_info">
                <div class="custom-select" >
                    <select value={this.state.startMonth} onChange={this.handleStartMonthChange}>
                      <option value="0">Start Month</option>
                      <option value="1">January</option>
                      <option value="2">Feburary</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="10"> December</option>
        
                      
                    </select>
        
                   
                </div>
                
                  </div>

                
                </div>


                <div class="start">
           
                    <div class="basic_info">
                        
                    <div class="custom-select" >
                        <select value={this.state.endDate} onChange={this.handleEndDateChange}>
                          <option value="0">End Date</option>
                          <option value="1">1</option>
                          <option value="3">2</option>
                          <option value="2">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
        
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
        
                          <option value="2">20</option>
                          <option value="2">21</option>
                          <option value="2">22</option>
                          <option value="2">23</option>
                          <option value="2">24</option>
                          <option value="2">25</option>
                          <option value="2">26</option>
                          <option value="2">28</option>
                          <option value="2">29</option>
                          <option value="2">30</option>
                          <option value="2">31</option>
        
        
                          
                        </select>
                </div>
                
                  </div>
            
                  <div class="basic_info">
                    <div class="custom-select" >
                        <select value={this.state.endMonth} onChange={this.handleEndMonthChange}>
                          <option value="0">End Month</option>
                          <option value="1">January</option>
                          <option value="2">Feburary</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="10"> December</option>
            
                          
                        </select>
            
                       
                    </div>
                    
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
export default Workexp;
