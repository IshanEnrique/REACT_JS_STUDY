import React,{useState} from "react";
import NoteContext from "./noteContext";

// Defining the State structure and providing mechanism to make state available everywhere
const NoteState = (props) => {
  // Declaring the State object
  const a = {
    name: "Rahul Kumar",
    class: "5b",
  };

//   Declaring the state
  const [state, setState] = useState(a);
  
  // Sample  Function to update the state
  const update = () => {
    setTimeout(() => {
        setState({
            name: "Vicky",
            class: "10b",
          });
    }, 2000);
  };
  // Wrapping the State with the help of NoteContext and providing the value
  return (
    <NoteContext.Provider value={{state,update}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
