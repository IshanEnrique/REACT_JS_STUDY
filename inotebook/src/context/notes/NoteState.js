import React,{useState} from "react";
import NoteContext from "./noteContext";

// Defining the State structure and providing mechanism to make state available everywhere
const NoteState = (props) => {
  // Declaring the State object
  const initialNotesState = [
    {
      "_id": "63a058f1fac2d5d55fcb0dbf",
      "title": "MERN Notes",
      "description": "MERN stands for MongoDB , Express ,  ReactJS , NodeJS",
      "tag": "rahul.kumar0850@gmail.com",
      "date": "2022-12-19T12:28:33.276Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },
    {
      "_id": "63a0d2f35de095bc37458e93",
      "title": "MERN Notes -2 ",
      "description": "Notes -2 ",
      "tag": "MERM Study",
      "date": "2022-12-19T21:09:07.627Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },{
      "_id": "63a058f1fac2d5d55fcb0dbf3",
      "title": "MERN Notes",
      "description": "MERN stands for MongoDB , Express ,  ReactJS , NodeJS",
      "tag": "rahul.kumar0850@gmail.com",
      "date": "2022-12-19T12:28:33.276Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },
    {
      "_id": "63a0d2f35de095bc37458e934",
      "title": "MERN Notes -2 ",
      "description": "Notes -2 ",
      "tag": "MERM Study",
      "date": "2022-12-19T21:09:07.627Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },{
      "_id": "63a058f1fac2d5d55fcb0dbf5",
      "title": "MERN Notes",
      "description": "MERN stands for MongoDB , Express ,  ReactJS , NodeJS",
      "tag": "rahul.kumar0850@gmail.com",
      "date": "2022-12-19T12:28:33.276Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },
    {
      "_id": "63a0d2f35de095bc37458e936",
      "title": "MERN Notes -2 ",
      "description": "Notes -2 ",
      "tag": "MERM Study",
      "date": "2022-12-19T21:09:07.627Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },{
      "_id": "63a058f1fac2d5d55fcb0dbf7",
      "title": "MERN Notes",
      "description": "MERN stands for MongoDB , Express ,  ReactJS , NodeJS",
      "tag": "rahul.kumar0850@gmail.com",
      "date": "2022-12-19T12:28:33.276Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    },
    {
      "_id": "63a0d2f35de095bc37458e938",
      "title": "MERN Notes -2 ",
      "description": "Notes -2 ",
      "tag": "MERM Study",
      "date": "2022-12-19T21:09:07.627Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    }
  ];

//   Declaring the state
  const [notes, setNotes] = useState(initialNotesState);
  
  // Sample  Function to update the state
//   const update = () => {
//     setTimeout(() => {
//         setState({
//             name: "Vicky",
//             class: "10b",
//           });
//     }, 2000);
//   };
  // Wrapping the State with the help of NoteContext and providing the value
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
