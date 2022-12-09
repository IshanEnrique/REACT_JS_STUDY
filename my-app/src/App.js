
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import navJson from './resources/nav.json';

let navElements=navJson;
function App() {

  const [mode,setMode]=useState(navElements.mode);
  const [navText,setNavText]=useState(mode==="dark"?"warning":"primary");
const toggleMode=()=>{
  
  if(mode==="light"){
    setMode("dark");
    setNavText("warning");
  }else{
    setMode("light");
    setNavText("primary");
  }

  console.log("text-"+navText);
}

  return (
   
   <>

  
  <Navbar  nav={navElements} toggleMode={toggleMode} mode={mode}  navText={navText}/>
  
  <TextForm heading="Enter text to analyze below"  />
  
  {/* <About/> */}
   </>
   
  );
}

export default App;
