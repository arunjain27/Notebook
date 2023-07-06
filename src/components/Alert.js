import React from 'react'

const Alert=(props)=> {
  return (
    <div>
     <div className="alert alert-success" role="alert" style={{fontSize:"15px",fontWeight:"bold"}}>
    {props.message}
</div>

    </div>
  )
}

export default Alert
