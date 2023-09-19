import React from 'react'
import './Intro.css'

export default function Intro() {
  return (
    <div id="intro">
        
    <div class="container-fluid padding pl-5 pr-5">
    <div class="row">
        
    <div class="order-2 order-lg-1 col-12 col-lg-6">
        <div class="text-center text-lg-left">
            <p id="hi"> Hi,I'm </p>
            <hr class="d-none d-lg-block"/>
            <p id="name"> Sandila <br/> Vihanga </p>
        </div>
        <br/><br/>
        <p id="quick_intro">
            I’m a 2nd year undergraduate student at IIT University, currently reading for the BEng(Hons) Software Engineering degree. I am 
            motivated, hardworking individual with a drive to learn and grow from any opportunity. I have the ability to meet deadlines 
            under stress and manage risks to the best of my capacity.
        </p>
    </div>        

    <div class="order-1 order-lg-2 col-12 col-lg-6">
        <p id="img"> <img src="./images/profile_photo.png" alt="" id="profile_pic"/> </p>
    </div>

    </div>
    </div>
    
    </div>
  )
}
