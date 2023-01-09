import React, { useEffect, useState } from 'react'
import NavBar from './navBar'
import { Routes, useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Animals from './comments'
import Register from './register'
import Auth from './auth'
import Comments from './comments'
import axios from 'axios';
import jwt_decode from "jwt-decode";

export default function Main() {
  const [names, setname] = useState([])
  const navigator = useNavigate()


  useEffect(()=>{getData()},[])
  async function getData(){
      const {data} = await axios.get('http://localhost:3002/api/comments');
      setname(data) ;
  }
  async function addComment(newComment){
    const token=localStorage.getItem('token')
    var decoded = jwt_decode(token);
    const {data} = await axios.get(`http://localhost:3002/api/users/${decoded._id}`);
    console.log(data);
    await axios.post('http://localhost:3002/api/comments',{name:data.name, body:newComment},{headers: {'x-auth-token': `${token}`}});
    getData()

  }
  const handleSubmit = async (event,data)=>{
    event.preventDefault();        
    const result = await axios.post('http://localhost:3002/api/auth',data)
   localStorage.setItem('token',result.data)
   navigator('/comments')
}
    return (
    <div>
    <NavBar/>
    <Routes> 
        <Route path="/comments"  element ={ <Comments names={names} addComment={(newComment)=>addComment(newComment)}/>} />         
        <Route path="/register"  element ={ <Register/>} />         
        <Route path="/auth"  element ={ <Auth handleSubmit={(event,data)=>handleSubmit(event,data)} />} />         
       
    </Routes>     

    </div>
  )
}
