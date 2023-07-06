import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    
const [credential,setcredential]=useState({name:"",email:"",password:"",cpassword:""})
let navigate=useNavigate();
  
 const handlesubmit = async (e)=>{
  e.preventDefault();
const {name,email,password}=credential;
const response = await fetch(`http://localhost:3001/empdata`,{
  method: "POST", 
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({name,email,password}),
  
});
const json = await response.json();
console.log(json);
if(json.success){
//redirect
localStorage.setItem('token',json.authtoken)
navigate("/");
}
else{
  alert("inVLID");
}
}

const onchange= (e)=>{
  setcredential({...credential,[e.target.name]:e.target.value})
  
    }
 
    return (
    <div>
   
    <form style={{marginTop:"7rem" ,color:"darkblue"}} onSubmit={handlesubmit}>
    <h2>SIGN UP</h2>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"name="name"onChange={onchange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="email"name='email' onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"name='password' onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword"name='cpassword' onChange={onchange} />
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
   </div>
  )
}

export default Signup
 