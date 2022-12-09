
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import navJson from './resources/nav.json';

let navElements=navJson;
function App() {

  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState(navElements.mode);
  const [navText,setNavText]=useState(mode==="dark"?"warning":"primary");

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
const toggleMode=()=>{
  
  if(mode==="light"){
    setMode("dark");
    setNavText("warning");
    showAlert("Dark mode has been enabled !","success");
  }else{
    setMode("light");
    setNavText("primary");
    showAlert("Light mode has been enabled !","success");
  }

  console.log("text-"+navText);
}

  return (
   
   <>

  
  <Navbar  nav={navElements} toggleMode={toggleMode} mode={mode}  navText={navText}/>
  <Alert  alert={alert} />
  <TextForm heading="Enter text to analyze below" showAlert={showAlert} />
  
  {/* <About/> */}
   </>
   
  );
}

export default App;
