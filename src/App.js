
import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Notestate from "./context/notes/NoteState";
// import Home from 'e:/backup/notebook/src/components/Home';
// import About from './components/About.js';
import About from './components/About';
import Home from './components/Home.js';
import Signup from './components/Signup';
import Login from './components/Login';

const App =()=>{
 
return (
<div> 
    
      <Notestate>
               <BrowserRouter>  
             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      
                         
                            
                        
                         
                            <Link className="nav-link" to="/home">NOTEBOOK</Link>
                           
                           
                           <Link   className='btn btn-primary mx-3 'style={{width:"auto"}} to='/login'type='button'>Login </Link>
                  
                  <Link className='btn btn-primary mx-1'to='/signup'style={{width:"auto"}} type='button'>Sign up </Link>
                      
                           
                        </ul>
                   
                   
                    </div>
                </div>
               
                 
            </nav>
         
          		<Routes>
          
                  <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
            
             <Route  path="/about" element={<About/>}/>
           
             <Route path="/login" element={<Login/>}/>
            
            <Route  path="/signup" element={<Signup/>}/>
          
             
           </Routes>
      
        	</BrowserRouter> 
         

</Notestate>
  
  
      </div>
    ) 

  
} 
export default App;
