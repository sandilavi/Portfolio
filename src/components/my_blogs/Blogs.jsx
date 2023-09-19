import React from 'react'
import './Blogs.css'

export default function Blogs() {
  return (
    <div id="blogs">
              
    <div class="container-fluid padding pl-5 pr-5">
    <p class="headings"> Blogs </p>
    <div class="row">

        <div class="col-6">
        <div class="cards">
            <p class="underline"> AI and Ethics </p>
            <p> Artificial intelligence (AI) refers to intelligence demonstrated by machines as opposed to natural 
                intelligence demonstrated by animals, such as humans. Artificial intelligence was established 
            <a href="blogs/ai.html"> Read More... </a>
            </p>
        </div>
        </div>
        
        <div class="col-6">
        <div class="cards">    
            <p class="underline"> Internet of Things and its Cyber Security Implications </p>
            <p> The Internet of Things (IoT) refers to physical objects that are equipped with sensors, 
                processing ability, software, and other technologies. Devices do not need to be connected 
            <a href="blogs/iot.html"> Read More... </a>
            </p>
        </div>
        </div>

    </div>
    </div>
    
    </div>
  )
}
