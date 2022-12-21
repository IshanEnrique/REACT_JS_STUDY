import React, { useContext, useState } from "react";
import NoteContext from "./noteContext";
import contextValue from "../alert/alertContext";

// Defining the State structure and providing mechanism to make state available everywhere
const NoteState = (props) => {
  const context = useContext(contextValue);
  const { showAlert } = context;
  // Declaring the State object
  const initialNotesState = [];

  //   Declaring the state
  const [notes, setNotes] = useState(initialNotesState);

  // Get all Notes

  const getNotes = async () => {
    let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_URI +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES +
      "get-all-notes";
    console.log("URL : " + url);

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
    });
    if (response.status === 200) {
      let res = await response.json();
      if (res.successCode === "00") {
        console.log("All notes loaded.........");
        setNotes(res.data.notes);
      }
    }
  };

  // Add a Note

  const addNote = async (title, description, tag) => {
    console.log("Adding a new note");
    let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_URI +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES +
      "create-notes";
    console.log("URL : " + url);
    let reqData = {
      title: title,
      description: description,
      tag: tag,
    };

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify(reqData),
    });
    let res = await response.json();
    if (response.status === 200) {
      if (res.successCode === "00") {
        let note = res.data.notes;
        setNotes(notes.concat(note));
        console.log("New created in the system.........");
        showAlert(res.successMessage, "success");
      } else {
        showAlert(res.error.errorMessage, "danger");
      }
    } else {
      showAlert(res.error.errorMessage, "danger");
    }
  };
  // Delete a Note

  const deleteNote = async (id) => {
    console.log("Deleting a note with Id : " + id);
    let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_URI +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES +
      "delete-notes/" +
      id;

    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
    });
    let res = await response.json();
    if (response.status === 200) {
      console.log("Deleting a Note " + JSON.stringify(res));
      if (res.successCode === "00") {
        console.log("Note has been removed from the system.......");
        let newNotes = notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newNotes);
        showAlert(res.successMessage, "success");
      } else {
        showAlert(res.error.errorMessage, "danger");
      }
    } else {
      showAlert(res.error.errorMessage, "danger");
    }
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    let url =
      process.env.REACT_APP_INOTEBOOK_BACKEND_SERVER +
      ":" +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PORT +
      process.env.REACT_APP_INOTEBOOK_BACKEND_HOST +
      process.env.REACT_APP_INOTEBOOK_BACKEND_URI +
      process.env.REACT_APP_INOTEBOOK_BACKEND_PATH_NOTES +
      "update-notes/" +
      id;
    console.log("URL : " + url);
    let reqData = {
      title: title,
      description: description,
      tag: tag,
    };

    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify(reqData),
    });
    let res = await response.json();
    if (response.status === 200) {
      console.log("Deleting a Note " + JSON.stringify(res));
      if (res.successCode === "00") {
        getNotes();
        showAlert(res.successMessage, "success");
      } else {
        showAlert(res.error.errorMessage, "danger");
      }
    } else {
      showAlert(res.error.errorMessage, "danger");
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
