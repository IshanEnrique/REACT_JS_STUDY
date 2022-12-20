import React, { useContext, useEffect }  from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import contextValue from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(contextValue);
  const { notes, getNotes } = context;

  useEffect(() => {
    try {
      getNotes();
    } catch (error) {
      console.log("Error in Use Effect : "+error)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Note</h2>

        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
