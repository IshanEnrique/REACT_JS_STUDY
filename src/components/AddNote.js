import React, { useContext, useState } from "react";
import contextValue from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(contextValue);
  const {  addNote } = context;

  const [note, setNote] = useState({title:"",description:"",tag:""})
  const handleAddNote=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }
  const handOnChange=(e)=>{
    
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <>
      <div>
        <div className="conainer my-3">
          <h2>Add a Note</h2>
          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="Enter the Title of the Note"
                onChange={handOnChange}
              />
              <div id="title" className="form-text">
                You have to provide Title for you note here.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                onChange={handOnChange}
              />
            </div>
            
            <button type="submit" onClick={handleAddNote} className="btn btn-primary">
              Add Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNote;
