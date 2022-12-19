import React from "react";
import NoteContext from "./noteContext";

// Defining the State structure and providing mechanism to make state available everywhere
const NoteState = (props) => {
  // Declaring the State
  const state = {
    name: "Rahul Kumar",
    class: "5b",
  };
  // Wrapping the State with the help of NoteContext and providing the value
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
}

export default NoteState;
