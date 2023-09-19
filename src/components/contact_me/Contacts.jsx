import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <div id="contact_me">
          
    <div class="container-fluid padding pl-5 pr-5 mb-4">    
    <p class="headings"> Contact Me </p>
    <div class="row">

        <div class="col-12 col-sm-6 col-lg-3">
        <div class="cards center">
            <i class="fas fa-phone margin"></i> 075-6714987
        </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-5">
        <div class="cards center">
            <i class="fas fa-envelope margin"></i> sandilavihanga@gmail.com 
        </div>
        </div>

        <div class="col-6 col-lg-2">
        <div class="cards center">    
            <i class="fab fa-linkedin margin"></i> <a href="https://www.linkedin.com/in/sandila-vihanga-79033b223/" target="_blank" 
            rel="noreferrer" class="contact linkedin"> Linkedin </a>
        </div>
        </div>
        
        <div class="col-6 col-lg-2">
        <div class="cards center">    
            <i class="fab fa-github margin"></i> <a href="https://github.com/sandilavi" target="_blank" rel="noreferrer" 
            class="contact github"> Github </a>
        </div>
        </div>

    </div>    
    </div>
    
    </div>
  )
}
