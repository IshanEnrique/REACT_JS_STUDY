
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import navJson from './resources/nav.json';

let navElements=navJson;
function App() {
  return (
   
   <>

  
  <Navbar  nav={navElements} />
  
  <TextForm heading="Enter text to analyze below" />

   </>
   
  );
}

export default App;
