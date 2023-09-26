import React from 'react'
import './Intro.css'

export default function Intro() {
  return (
    <div id="intro">
        
    <div className="container-fluid pl-5 pr-5 pt-5 pb-3 p_top">
    <div className="row">
        
    <div className="order-2 order-lg-1 col-12 col-lg-6">
      <div className="text-center text-lg-left">
        <p id="hi"> Hi,I'm </p>
        <hr className="d-none d-lg-block"/>
        <p id="name"> Sandila <br/> Vihanga </p>
      </div>
      <br/><br/>

      <p id="quick_intro">
      I’m an undergraduate student pursuing a BSc (Hons) in Computer Science at the University of Westminster, currently enrolled at the 
      University of IIT. I am motivated, hardworking individual with a drive to learn and grow from any opportunity. I have the ability to 
      meet deadlines under stress and manage risks to the best of my capacity.
      </p>
    </div>        

    <div className="order-1 order-lg-2 col-12 col-lg-6">
      <p id="img"> <img src="./images/profile_photo.png" alt="" id="profile_pic"/> </p>
    </div>

    </div>
    </div>
    
    </div>
  )
}
