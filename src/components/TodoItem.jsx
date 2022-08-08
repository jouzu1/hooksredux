import React from 'react'

function TodoItem() {
  return (
    <div>
        <h3>TodoItem</h3>
        <div className="row mx-5">
            <div className='col'>#1</div>
            <div className='col'>Title</div>
            <button className='col btn btn-primary m-2'>Edit</button>
            <button className='col btn btn-primary m-2'>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem