import React,{useContext, useState} from 'react'
import notecontext from "../context/notes/NoteContext1";
import Alert from './Alert';
const Addnote=()=> {
    const context=useContext(notecontext);
    const {addnote}=context;  
  
  const [note,setnote]=useState({title:"",description:"",tag:""})
  
  const handleclick= (e)=>{
    e.preventDefault();
    addnote(note.title,note.description,note.tag);
  setnote({title:"",description:"",tag:""})
  }
  const onchange= (e)=>{
    setnote({...note,[e.target.name]:e.target.value})
    
      }
  
    return (
   
   <div>
         <form>
       <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"name="title" aria-describedby="emailHelp" onChange={onchange} value={note.title}/>
  </div>
  <div className="mb-3">
    <label  htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label  htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} value={note.tag}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleclick} style={{margin:"5px"}}> add note</button>
</form>
 
   <Alert message={"REfresh after add the note"}/>
    
    </div>
  )
}

export default Addnote
