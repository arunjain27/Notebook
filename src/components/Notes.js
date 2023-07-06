import React,{useContext, useEffect,useRef,useState} from 'react'
import notecontext from "../context/notes/NoteContext1";
import Notesitem from "./Notesitem"
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';
// import Addnote from './Addnote';
const Notes = () => {
    
  let navigate=useNavigate();
    const context=useContext(notecontext);
    const {notes,getnote}=context;  
      
  
    useEffect(()=>{
    if(localStorage.getItem('token'))
    {  
    getnote(); 
    }
   else{
   navigate("/login")

   }
 
  },[])

  const handleclick= (e)=>{
    e.preventDefault();
  

  }
  const onchange= (e)=>{
    setnote({...note,[e.target.name]:e.target.value})
    
      }
  const updatenote=(note)=>{
   
    ref.current.click();
  }
  const ref=useRef(null);
  const [note,setnote]=useState({title:"ewr",description:"",tag:"default"})

  return (
    <div style={{marginTop:"70px"}}>
  
      <h1>Add your notes</h1>
      <Addnote/>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
  </button>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
       <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle"name="etitle" aria-describedby="emailHelp" onChange={onchange}  minLength={3}/>
  </div>
  <div className="mb-3">
    <label  htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onchange}  minLength={3}/>
  </div>
  <div className="mb-3">
    <label  htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name='etag' onChange={onchange} minLength={3}/>
  </div>
  <button disabled={note.title.length<1 ||note.description.length<1?true:false} type="submit" className="btn btn-primary" onClick={handleclick}> add note</button>
</form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
     
     <div>     
    <div className='container row my-3 col my-3'>
      {notes.length===0 && 'no notes in your list'}

    </div>

      {notes.map((note)=>{
       return <Notesitem key={note._id} updatenote={updatenote} note={note}/> 
       })}
  
  </div>

    </div>
  )
}

export default Notes
