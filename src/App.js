import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import './App.css';
import Homepage from './components/Homepage.jsx';
import Personalinfo2 from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience.jsx";
import FYP from "./components/FYP";
import Dashboard from "./components/Dashboard";
import DirectoryStates from "./context/DirectoryStates";
import EditPersonalInfo from "./components/EditPersonalInfo";
import EditDescription from "./components/EditDescription";
import EditFYP from "./components/EditFYP";
import Resume from "./components/Resume";

function App() 
{
   return (
    <DirectoryStates>
     <div className="App">
         <BrowserRouter>
           <Routes>          
             <Route path="/" element={<Homepage/>} />
             <Route path="/Login" element={<Login/>} />
             <Route path="/Dashboard" element={<Dashboard/>}/>
             <Route path ='/PersonalInfo' element= {<Personalinfo2/>}/>
             <Route path ='/EditPersonalInfo' element={<EditPersonalInfo/>}/>
             <Route path ='/Skills' element={<Skills/>}/>
             <Route path ='/Description' element={<Description/>}/>
             <Route path ='/EditDescription' element={<EditDescription/>}/>
             <Route path="/Projects" element={<Projects/>}/>
             <Route path= "/Education" element={<Education/>}/>
             <Route path="/WorkExperience" element={<WorkExperience/>}/>
             <Route path="/FYP" element={<FYP/>}/>
             <Route path="/EditFYP" element={<EditFYP/>}/>
             <Route path="/Resume" element={<Resume/>}/>
           </Routes>


       </BrowserRouter>
     </div>
     </DirectoryStates>
   );
}
export default App;
 