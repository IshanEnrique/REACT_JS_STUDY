import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpOnClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    
    setText(event.target.value);
  }
  const [text,setText]=useState("Enter Text");
  // setText("Enter Text Here");
  return (
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpOnClick}>To Uppercase</button>
    </div>
   
  )
}
