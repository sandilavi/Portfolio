import React from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <div id="navbar">
      
    <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-sm">
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navBar"><span class="navbar-toggler-icon"></span></button>
    <div class="navbar-collapse collapse" id="navBar">    
        <ul class="navbar-nav">
            <li class="nav-item mr-2"><a class="nav-link" href="#intro"> Home </a></li>
            <li class="nav-item mr-2"><a class="nav-link" href="#about_me"> About Me </a></li>
            <li class="nav-item mr-2"><a class="nav-link" href="#blogs"> Blogs </a></li>
            <li class="nav-item mr-2"><a class="nav-link" href="#projects"> Projects </a></li>
            <li class="nav-item mr-2"><a class="nav-link" href="#contact_me"> Contact Me </a></li>
        </ul>
    </div>    
    </nav>
    
    </div>
  )
}
