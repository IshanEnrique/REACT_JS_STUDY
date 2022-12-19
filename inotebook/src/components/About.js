import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
const About = () => {
  let noteState= useContext(noteContext);
  return (
    <div>
      This is about {noteState.name}
    </div>
  )
}

export default About
