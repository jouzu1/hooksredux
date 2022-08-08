import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function TodoInput() {
  return (
    <div>
        <h3>TodoInput</h3>
        <div className="row m-5">
            <input type="text" className='col form-control'></input>
            <button className='col btn btn-primary mx-2'>Add</button>
        </div>
    </div>
  )
}

export default TodoInput