import React from "react";
import '../assets/form.css';

class Personalinfo extends React.Component
{
    ch(event){
        document.getElementById("theimg").src=URL.createObjectURL(event.target.files[0]);
    }
    render(){
        return(


          
            <div>
               <div >
    <div class="heading">
    The Graduation Directory
   </div>
</div>
<body>
<h2> Personal Information</h2>
<form action="#" method="post">
    <div class="everything">
    <div class="the_whole"> 
        
        <img class="image_def" src="placeholder-image.png" id="theimg"></img>
        
  
    <div class="the_firstline">
    
    <div class="form-group">
      <label for="name"> Full Name:</label>
      <input type="text" id="name" name="name" required></input>
    </div>
  
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required></input>
    </div>
    <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" pattern="+92-[0-9]{3}-[0-9]{7}" placeholder="+923111111111"></input>
</div>
<input onChange={this.ch(event)} type="file" class="file-input" accept="*"  ></input>

    
</div>
</div>
<div class=" the_whole ">
    
    
    <div class="form-group address">
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" required></input>
    </div>

</div>
<div class="the_whole">
    <div class="form-group address">
        <label for="address">Linkenin:</label>
        <input type="text" id="Linkenin" name="Linkedinaddress" required></input>
      </div>
    </div>
  
    <div class="the_buttons">
    <input type="submit" value="Save"></input>
    <input type="submit" value="Next"></input>
   
    
    </div>

  
</div>
</form>
</body>
            </div>
        );
    }
}
export default Personalinfo;