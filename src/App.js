import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import BrandInfo from "./Components/BrandInfo";
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [modeText, setmodeText] = useState("Enable");
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  
  
  const showAlert = (message, type)=>{
    setalert(
      {
        msg: message,  //here we are assigning the parameter a key with DIFFERENT name
        type: type     //here we are assigning the parameter a key with SAME name
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
    
  const toggleMode = ()=>{
   if(mode === "light" && modeText === "Enable"){
     setmode("dark");
     setmodeText("Disable");
     showAlert("Darkmode has been Enabled" , "success");
     document.body.style.backgroundColor="#074307";
     document.body.style.color="white";
     document.title ="REACT- dark mode";
   }
   else{
     setmode("light");
     setmodeText("Enable");
     showAlert("Darkmode has been Disabled" , "warning");
     document.body.style.backgroundColor="white";
     document.body.style.color="black";
     document.title ="REACT- light mode";
   }
 }

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <Alert alert={alert}/>
       <div className="container">
          {/* <Routes>
            <Route path="/About" element={<About />}>
            </Route>
            <Route path="/" element= {        */}
            <TextForm showAlert={showAlert} Heading="Enter Text To Analyze:- " mode={mode}/>
            {/* </Route>
            <Route path="/logo" element={<BrandInfo />}>
            </Route>
          </Routes> */}
       </div>
       {/* </Router> */}
    </>
  );
}

export default App;
