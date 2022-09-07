import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }
  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")

  }
  const handleHtoRClick = () => {
    let newText = text.replace('class', 'className');
    setText(newText);
  }
  const handleClearClick = () => {
    let newText ="" ;
    setText(newText);
  }
  const onChangeHandle = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
            <textarea type="text" className="form-control" value={text} style={{backgroundColor: props.mode === "dark" ? "gray": "white", color: props.mode === "dark" ? "white": "black"}} onChange={onChangeHandle} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClick} >CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLOClick} >CONVERT TO LOWERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleHtoRClick}>Convert HTML to React</button>
        <button className="btn btn-primary  "    onClick={handleClearClick} >CLEAR TEXT</button>

    </div>
    
    <div className="container my-2">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length } words and {text.length} Characters</p>
    </div>

    </>
  )
}
