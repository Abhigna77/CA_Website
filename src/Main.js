import React from 'react'

export default function Main(){
    return(
        <div className="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active">
        <a class="nav-link" href="#Home">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#AboutUs">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Res">Responsibilities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Incentives">Incentives</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ContactUs">Contact Us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
    </form>
  </div>
</nav>
       </div>
    )
    
}