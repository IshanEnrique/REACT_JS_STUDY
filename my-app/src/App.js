
import './App.css';

let name="Rahul";

function App() {
  return (
   
   <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Clients</li>
    </nav>
    <div className="container">
      <h3>Hello {name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eum fugiat doloribus cupiditate aperiam animi illo consequuntur ratione eius dolore minus est itaque laborum, molestiae omnis exercitationem placeat architecto? Debitis.
      </p>  
    </div>  
   </>
   
  );
}

export default App;
