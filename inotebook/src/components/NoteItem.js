import React from "react";

const NoteItem = (props) => {
  const {note}  = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" >
        <div className="card-body">
            <div className="d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i class="fa-solid fa-trash-can mx-2"></i>
                <i class="fa-sharp fa-solid fa-file-pen mx-2"></i>
            </div>
            <p className="card-text">{note.description}</p>
            
        </div>
        </div>
    </div>
  );
};

export default NoteItem;
