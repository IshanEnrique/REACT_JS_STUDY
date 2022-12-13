import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");
  const [wordsCount,setWordCount]=useState( text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
  const [actionsDisaled,setActionsDisaled]=useState(text.length===0);
const clearText=()=>{
  setText("");
  setWordCount(0);
  setActionsDisaled(true);
  props.showAlert("Text has been cleared !","success");
}

  const handleCopy=()=>{
    let newText=document.getElementById("myText");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    setActionsDisaled(text.length===0);
    props.showAlert("Text has been coppied !","success");
    
  }

  const removeExtraSpace=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
    navigator.clipboard.writeText(newText.value);
    setActionsDisaled(text.length===0);
    props.showAlert("Extra spaces have been removed !","success");
    
  }
 
  const handleUpOnClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    setWordCount( text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
    setActionsDisaled(text.length===0);
    props.showAlert("Text converted to Uppercase !","success");
  }

  const handleUpOnClickLower=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    setWordCount( text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
    setActionsDisaled(text.length===0);
    props.showAlert("Text converted to Lowercase !","success");
  }
  const handleOnChange=(event)=>{
    
    setText(event.target.value);
    setWordCount( text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
    setActionsDisaled(text.length===0);
  }
  
  
  // setText("Enter Text Here");
  
  return (
    <>
      <div className="container my-3">
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label> */}
          <textarea
            className="form-control my-2"
            onChange={handleOnChange}
            value={text}
            id="myText"
            rows="6"
            style={{backgroundColor: props.textAreaBgColor , color: props.textAreaColor}} 
          ></textarea>
        </div>
        <button disabled={actionsDisaled} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear
        </button>
        <button disabled={actionsDisaled} className="btn btn-primary mx-2 my-1" onClick={handleUpOnClick}>
          To Uppercase
        </button>
        <button disabled={actionsDisaled} className="btn btn-primary mx-2 my-1" onClick={handleUpOnClickLower}>
          To Lowercase
        </button>
        <button disabled={actionsDisaled} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={actionsDisaled} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {wordsCount} words and {text.length} characters
        </p>
        <p>Approx {0.008 * wordsCount} will it take to read the whold text.</p>
        <h2>Preview</h2>
        <p>{text.length!==0? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
