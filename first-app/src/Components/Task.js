import React from "react"

function Task(props){
    return(
        <div className="task">
          <p onClick={() => props.del(props.id)}>{props.content}</p>
      </div>
    )
}
 export default Task