import React from 'react'

export default function CompletedDiv(props) {
  return (
    <div className='completeDiv'>
      <h2 className='completeHeader'>{props.header}</h2>
      <h3>{props.name}</h3>
    </div>
  )
}
