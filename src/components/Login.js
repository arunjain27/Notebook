import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
   
const [credential,setcredential]=useState({email:"",password:""})
   let  navigate=useNavigate();

 const handlesubmit = async (e)=>{
    e.preventDefault();

  const response = await fetch(`http://localhost:3001/login`,{
    method: "POST", 
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email:credential.email,password:credential.password}),
    
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
    <h2>LOGIN</h2>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"name="email"onChange={onchange} value={credential.email}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"name='password' onChange={onchange}  value={credential.password}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
   </div>
  )
}

export default Login
