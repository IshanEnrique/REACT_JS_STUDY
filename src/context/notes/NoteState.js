import React,{useState} from "react";
import NoteContext from "./noteContext";

// Defining the State structure and providing mechanism to make state available everywhere
const NoteState = (props) => {
  // Declaring the State object
  const initialNotesState = [
    
  ];

//   Declaring the state
  const [notes, setNotes] = useState(initialNotesState);

// Get all Notes

const getNotes=async ()=>{
  let url=process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER+":"+
  process.env.REACT_APP_INOTEBOOK_BACKEND_PORT+
  process.env.REACT_APP_INOTEBOOK_BACKEND_HOST+
  process.env.REACT_APP_INOTEBOOK_BACKEND_URI+
  process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES+
  "get-all-notes";
  console.log("URL : "+url);
 

  let response= await fetch(url,{
  method:"GET",
  headers:{
  "content-type":"application/json",
  "auth-token":process.env.REACT_APP_INOTEBOOK_BACKEND_DEMO_AUTH_TOKEN
  }
  });
  if(response.status===200){
    let res=await response.json();
    console.log("Getting all Notes "+JSON.stringify(res));
    if(res.successCode==="00"){
      console.log("All notes loaded.........");
      setNotes(res.data.notes);
    }
  }
}

  // Add a Note

  const addNote=(title,description,tag)=>{

    console.log("Adding a new note");
    // TODO: API CALL
    let note={
      "_id": "63a0d2f35de095bc37458e9361",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-12-19T21:09:07.627Z",
      "user": "639f40afad6d06927af81db2",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete a Note

  const deleteNote=async (id)=>{

    console.log("Deleting a note with Id : "+id);
    let url=process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER+":"+
    process.env.REACT_APP_INOTEBOOK_BACKEND_PORT+
    process.env.REACT_APP_INOTEBOOK_BACKEND_HOST+
    process.env.REACT_APP_INOTEBOOK_BACKEND_URI+
    process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES+
    "delete-notes/"+id;

    let response= await fetch(url,{
    method:"DELETE",
    headers:{
    "content-type":"application/json",
    "auth-token":process.env.REACT_APP_INOTEBOOK_BACKEND_DEMO_AUTH_TOKEN
    }
    });
    if(response.status===200){
      let res=await response.json();
      console.log("Deleting a Note "+JSON.stringify(res));
      if(res.successCode==="00"){
        console.log("Note has been removed from the system.......");
        let newNotes=notes.filter((note)=>{
          return note._id!==id;
        });
        setNotes(newNotes);
      }
    }
    
  }
  // Edit a Note
  const editNote=async (id,title,description,tag)=>{
    // TODO: API CALL

    let url=process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER+":"+
            process.env.REACT_APP_INOTEBOOK_BACKEND_PORT+
            process.env.REACT_APP_INOTEBOOK_BACKEND_HOST+
            process.env.REACT_APP_INOTEBOOK_BACKEND_URI+
            process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES+
            "update-notes/"+id;
    console.log("URL : "+url);
    let reqData={
      "title": title,
      "description": description,
      "tag": tag
    };

    let response= await fetch(url,{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "auth-token":process.env.REACT_APP_INOTEBOOK_BACKEND_DEMO_AUTH_TOKEN
      },
      body:JSON.stringify(reqData)
    });
    let res=response.json();
    console.log("Update API response : "+res);
    // Editing the note
    console.log("Editing the note on id : "+id);
    notes.forEach((note)=>{
      if(note._id===id){
        note.title=title;
        note.description=description;
        note.tag=tag;
      }
    });

   
  }
  
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
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
