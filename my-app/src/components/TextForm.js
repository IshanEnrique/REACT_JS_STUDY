import React,{useState} from 'react'

export default function TextForm(props) {
  const handleCopy=()=>{
    let newText=document.getElementById("myText");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    
  }

  const removeExtraSpace=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
    navigator.clipboard.writeText(newText.value);
    
  }
 
  const handleUpOnClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    setWordCount(text.split(" ").length);
  }

  const handleUpOnClickLower=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    setWordCount(text.split(" ").length);
  }
  const handleOnChange=(event)=>{
    
    setText(event.target.value);
    setWordCount(text.split(" ").length);
  }
  
  const [text,setText]=useState("Enter Text");
  const [wordsCount,setWordCount]=useState(text.split(" ").length);
  // setText("Enter Text Here");
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myText" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpOnClick}>To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleUpOnClickLower}>To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{wordsCount} words and {text.length} characters</p>
      <p>Approx {0.008 * wordsCount} will it take to read the whold text.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
