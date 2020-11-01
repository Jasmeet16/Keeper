import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Input from "./Input";
import Task from "./Task";

function App() {
  let [invalue, setInvalue] = useState("");

  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setInvalue(newVal);
  }

  function handleClick() {
    setTasks((prevArr) => {
      return [...prevArr, invalue];
    });
    setInvalue("");
    console.log(tasks);
  }

  function deleteTask(index){
    setTasks( tasks.filter((e,i) => {
        return i !== index;
    }));
  }

  return (
    <div>
      <Navbar />
      <Input handler={handleChange} val={invalue} hclick={handleClick} />
      <div className="task-container">
        {tasks.map((e, i) => (
          <Task content={e} del = {deleteTask} key={i} id = {i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
