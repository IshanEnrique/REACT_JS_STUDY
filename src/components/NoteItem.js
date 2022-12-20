import React, { useContext } from "react";
import contextValue from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(contextValue);
  const {  deleteNote,editNote } = context;
  const {note}  = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" >
        <div className="card-body">
            <div className="d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                <i className="fa-sharp fa-solid fa-file-pen mx-2" onClick={()=>{editNote(note._id,note.title,note.description,note.tag)}}></i>
            </div>
            <p className="card-text">{note.description}</p>
            <p className="card-text">{note.tag}</p>
            
        </div>
        </div>
    </div>
  );
};

export default NoteItem;
