import React,{useContext} from 'react'
import notecontext from "../context/notes/NoteContext1";
import Alert from './Alert';

const Notesitem=(props)=> {

  const {note}=props;
    const context=useContext(notecontext);
    const {deletenote}=context;
  return(
   <>
    
{/* 
{note.title}
 {note.description} */}
 <div className="card" >

  <div className="card-body container m-3" >
  
  <h5 className='card-title' style={{color:"red",fontWeight:"bold"}}>TITLE--{note.title}</h5> 
  <h5 className='card-text' style={{color:"#3DED97"}}>DESCRIPTION--{note.description}</h5> 
 <h5  className='card-text' style={{color:"#D34DD2"}} >TAG--{note.tag}</h5>
  <button onClick={()=>{deletenote(note._id)}}>delete</button>   {  /* deletenote mai id jygi */}
  {/* <button onClick={()=>{updatenote(note)}}> update</button>  */}

  </div>
</div>


    </> 
  )
}

export default Notesitem
