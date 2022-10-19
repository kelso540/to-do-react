import React from 'react'

export default function Completed(props) { 

  let ordinals = ''; 
  const returnNumber = () =>{
    if(props.start === 1){
      ordinals = 'st'; 
    }
    if(props.start === 2){
      ordinals = 'nd'; 
    }
    if(props.start === 3){
      ordinals = 'rd'; 
    }
    if(props.start >= 4 && props.start <= 21){
      ordinals = 'th'; 
    }
  }
  returnNumber(); 

  return (
    <div className='completed' id={props.id}>
      <div className='completedListItem'>
        <i className='fa-solid fa-circle fa-2xs completeCircle'></i>
        <span className='listText'>{props.name}</span>
      </div>
      <div>
        <p className='completeOrder'>({props.start}{ordinals} task complete since page refresh.)</p>
      </div>
    </div>
  )
}
