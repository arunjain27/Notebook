import React, { useState } from "react";
import NoteContext from  "./NoteContext1"


const NoteState=(props)=>{

 
const notesinitial=[];
const [notes,setnotes]=useState(notesinitial);
//todo api call 

const getnote = async()=>{

    const response = await fetch(`http://localhost:3001/fetchallnotes`,{
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
             }
       
        
      });
      const json = await response.json();
      console.log(json);
      setnotes(json);
}


const addnote = async (title,description,tag)=>{
   
    const response = await fetch(`http://localhost:3001/addnote`,{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
    },
       
      body: JSON.stringify({title,description,tag}),
      });
     const json = response.json();
   console.log(json);
   console.log(response);
  
setnotes(notes.concat(json));
}

const deletenote = async (id)=>{
const response = await fetch(`http://localhost:3001/deletenote/${id}`,{
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json",
    "auth-token":localStorage.getItem('token')
},
   
  
  });
const json = response.json();
console.log(json);

console.log("deleting the id"+id);

const newnote=notes.filter((note)=>{return note._id!==id})

setnotes(newnote);
}

const editnote = async (id,title,description,tag)=>{

    
    const response = await fetch(`http://localhost:3001/updatenote/641ea58315efb408117dd1ed`,{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
},
       
        body: JSON.stringify({title,description,tag}),
      });
    const json = response.json();
    console.log(json);
    console.log(response);

    for(let index=0;index<notes.length;index++)
    {
        const element=notes[index];
    if(element._id===id)
    {
        element.title=title;
        element.description=description;
        element.tag=tag;
    }
  
    }


}
return(

<NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnote}}>   
                                         {/* hum update or actual notes le sake */}

{props.children}


</NoteContext.Provider>

)  

}

export default NoteState;










 