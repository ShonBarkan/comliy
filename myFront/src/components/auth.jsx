import React from 'react'
import {useState} from 'react'


export default function Auth(props) {
    const {handleSubmit}=props
    const [data, setdata] = useState({});

 return (
   <div>
       <form className='m-4'>
       <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control"
         onChange={(ev)=>setdata({...data,email:ev.target.value})} />
       </div>
       <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Password</label>
         <input type="password" class="form-control" 
         onChange={(ev)=>setdata({...data,password:ev.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary" onClick={(event)=>handleSubmit(event,data)}>Submit</button>
</form>
   </div>   
  )
}
