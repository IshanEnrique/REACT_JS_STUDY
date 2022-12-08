
import './App.css';
import Navbar from './components/Navbar';

import navJson from './resources/nav.json';

let navElements=navJson;
function App() {
  return (
   
   <>

  
  <Navbar  nav={navElements} />
   </>
   
  );
}

export default App;
