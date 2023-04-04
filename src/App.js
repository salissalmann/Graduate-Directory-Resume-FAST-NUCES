import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import './App.css';
import Homepage from './components/Homepage.jsx';
//import Personalinfo from "/personal_info.js";

function App() 
{
   return (
     <div className="App">
         <BrowserRouter>
           <Routes>          
             <Route path="/" element={<Homepage/>} />
             <Route path="/Login" element={<Login/>} />

            { /*<Route path="/Form" element={<Personalinfo/>} />*/}
           </Routes>
       </BrowserRouter>
     </div>
   );
}
export default App;
 