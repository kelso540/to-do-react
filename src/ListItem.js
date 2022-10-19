import React from 'react'

export default function ListItem(props) {

  return (
    <div className={'toDoItem'} id={props.id}>
      <div className='listItemDiv'>
        <div className='listItemA'>
          <i className='fa-solid fa-circle fa-2xs'></i>
        </div>
        <div className='listItemB'>
          <span className='listText'>{props.name}</span>
      </div>
      </div>
      <div>
        <div className='listCheckCross'>
          <i className='fa-solid fa-check fa-2x' onClick={props.complete}></i>
          <i className='fa-solid fa-x fa-2x' onClick={props.list}></i>
        </div>
      </div>
    </div>
  )
}
