import React from "react";

function Input(props) {
  return (<div>
    <input
      type="text"
      onChange={(e) => props.handler(e)}
      placeholder="Type Here to keep the note"
      value={props.val}
      className="create-note"
    ></input>
    <button onClick={() => props.hclick() } className="btn">+</button>
  </div>);
}
export default Input;
