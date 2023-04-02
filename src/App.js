import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import './App.css';
import Homepage from './components/Homepage.jsx';

function App() 
{
   return (
     <div className="App">
         <BrowserRouter>
           <Routes>          
             <Route path="/" element={<Homepage/>} />
             <Route path="/Login" element={<Login/>} />
           </Routes>
       </BrowserRouter>
     </div>
   );
}
export default App;
 