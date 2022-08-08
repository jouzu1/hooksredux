import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function TodoInput() {
  return (
    <div>
        <h3>TodoInput</h3>
        <div className="row">
            <input type="text"></input>
            <button>Add</button>
        </div>
    </div>
  )
}

export default TodoInput