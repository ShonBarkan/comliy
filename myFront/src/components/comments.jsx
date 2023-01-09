import React from 'react'
import { useEffect ,useState } from 'react'
import axios from 'axios'

export default function Comments(props) {
    const {names,addComment}=props
    const [newComment, setNewComment] = useState([])

  return (
    <div>
        <ol>
        {names.map(name => 
        <li key={name._id}>{name.body}-----------{name.name}</li>)}
         </ol>

         <input type="text" onChange={(e)=>setNewComment(e.target.value)} />
         <button onClick={()=>addComment(newComment)}>send</button>
    </div>
  )
}
