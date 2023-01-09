import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
  const navigate=useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/comments">Comments</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/movies">Movies</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/auth">login</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/register">signup</a>
        </li>
        <li class="nav-item">
          <button className='bg-danger' 
            onClick={()=>{
            localStorage.removeItem('token');
            navigate('/auth') }}>
            LogOut
          </button>
        </li>
      </ul>
   
  </div>
</nav>
  )
}
