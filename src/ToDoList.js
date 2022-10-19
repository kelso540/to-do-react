import React from 'react'

export default function ToDoList(props) {
    
  return (
    <div className='toDoWhole'>
        <h1 className='toDoMainHeader'>To Do List</h1>
        <div className={(props.column) ?'listItemSubHeaderDiv' :'displayNone'}>
          <h4>List Item</h4>
          <div className='completeDelete'>
            <h4>Complete</h4>
            <h4>Delete</h4>
          </div>
        </div>
        <span className='listDo'>{props.elements}</span>
        <br></br>
        <input type='text' className='inputBox' placeholder='Type task to add to list here'/>
        <div className='buttons'>
          <button className='addItemBtn' onClick={props.changeArray}>Add Task</button>
          <button className={(props.fill) ?'clearCompleteBtn' :'displayNone'} onClick={props.clear}>Clear Complete List</button>
        </div>
    </div>
  )
}
