import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"30px"}}>
    {props.alert &&<div className="alert alert-success" role="alert">
  {props.alert}
    </div> }
</div>
  )
}
