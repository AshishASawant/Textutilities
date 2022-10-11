import React, { useState } from "react";

export default function Textarea(props) {
  function handletouppercase() {
    settext(text.toUpperCase());
    props.showalert("String Converted to Uppercase")
  }
  function handletolowercase() {
    settext(text.toLowerCase());
    props.showalert("String Converted to Lowerrcase")
  }

  function handleonchange(e) {
    settext(e.target.value);
  }

  function handletoclear(e) {
    settext("");
    props.showalert("Textarea has been cleared")
  }


  const [text, settext] = useState("");

  
  return (
    <>
      <div className={`container my-4 text-${props.mode==="light"?"black":"white"}`}>
        <div className="container">
          <h1>Enter text below</h1>
          <textarea className="form-control" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"white":"#00093c"}}
            rows="8"
            value={text}
            onChange={handleonchange}
            placeholder="Enter you text here"
          ></textarea>
          <div>
            <button className="btn btn-primary mx-2 my-2" onClick={handletouppercase}>
              Convert To Uppercase
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handletolowercase}
            >
              Convert To Lowercase
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handletoclear}>
              Clear
            </button>
          </div>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <button className="btn btn-info" disabled>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words / {text.length} characters
          </button>
          <p>
            Estimated reading time:<b>{text.split(" ").filter((element)=>{return element.length!==0}).length / 30} minutes</b>
          </p>
          <h2>Preview</h2>
          <p className="container">{text.length===0?"Nothing to preview":text}</p>
        </div>
      </div>
    </>
  );
}
