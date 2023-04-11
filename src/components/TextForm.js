import React,{useState} from "react";

export default function TextForm(props) {

    const [text,setText] = useState("");

    const handleTextChange = (event) =>{
        setText(event.target.value);
    }

    const ConvUpper =()=>{
        let newText =text.toUpperCase();
        setText(newText);
    }

    const ConvLower =()=>{
        let newText =text.toLowerCase();
        setText(newText);
    }

    const Clear =()=>{
        setText("");
    }

  return (
    <>
    <div style={{color : props.mode==='dark'?'white':'black', backgroundColor :props.mode==='light'?'#f2f3f5':'black'}}>
      <div className="mb-3">

          <h1 >{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={handleTextChange}
          style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary my-4" onClick={ConvUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={ConvLower}>Convert to LowerCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={Clear}>Clear</button>

      </div>
      
      
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>It will take approx {(text.split(" ").length*0.08)} minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
