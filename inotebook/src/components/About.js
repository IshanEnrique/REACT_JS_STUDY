import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
const About = () => {
  let noteState= useContext(noteContext);
  useEffect(() => {
    noteState.update();
  }, [])
  return (
    <div>
      This is about {noteState.state.name} and he study in class {noteState.state.class}
    </div>
  )
}

export default About
