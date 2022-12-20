import React, { useContext, useEffect, useRef, useState }  from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import contextValue from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(contextValue);
  const { notes, getNotes ,editNote} = context;
 

  useEffect(() => {
    try {
      getNotes();
    } catch (error) {
      console.log("Error in Use Effect : "+error)
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef('');
  const closeRef = useRef('');
  const [note, setNote] = useState({id:"", etitle:"",edescription:"",etag:""});
  const updateNote=(currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }

  const handleAddNote=(e)=>{
    
    editNote(note.id,note.etitle,note.edescription,note.etag);
    closeRef.current.click();
  }
  const handOnChange=(e)=>{
    
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <>
      <AddNote />
           
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="my-3">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  aria-describedby="Enter the Title of the Note"
                  onChange={handOnChange}
                />
                <div id="etitle" className="form-text">
                  You have to provide Title for you note here.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  onChange={handOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={handOnChange}
                />
              </div>
              
              
            </form>
            </div>
            <div className="modal-footer">
              <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAddNote} >Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Note</h2>

        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
