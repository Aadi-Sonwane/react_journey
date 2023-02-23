import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => { // handleUpClick is a function that is used to handle the click event
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase(); // toUpperCase is a function that is used to convert the text to uppercase
    setText(newText); // setText is a function that is used to update the state
  }
  const handleLoClick = () => { // handleLoClick is a function that is used to handle the click event
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase(); // toLowerCase is a function that is used to convert the text to lowercase
    setText(newText); // setText is a function that is used to update the state
  }
  const handleOnChange = (event) => { // handleOnChange is a function that is used to handle the change event
    console.log("On Change");
    setText(event.target.value); // evnet.target.value is used to get the value of the event target 
                                  // i.e. the textarea element in this case 
                                 
  }
  const handleClearClick = () => { // handleClearClick is a function that is used to handle the click event
    console.log("Clear was clicked" + text);
    let newText = ""; // toLowerCase is a function that is used to convert the text to lowercase
    setText(newText); // setText is a function that is used to update the state
  }

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
