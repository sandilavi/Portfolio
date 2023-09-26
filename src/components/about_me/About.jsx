import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id="about_me">
          
    <div className="container-fluid about pl-5 pr-5 pt-5 pb-3 p_top">
    <div className="intro_sec pb-4">
    <p className="about_heading"> About Me </p>
    <p>
        I'm Sandila Vihanga. I studied at St. Aloysius' College, Galle. I'm currently taking BSc (Hons) Computer
        Science degree at university of IIT. With a strong foundation in IT and a passion for software development, I’m actively seeking a
        front-end development internship in a reputable IT organization. I aim to apply my academic knowledge and dedication to contribute 
        effectively while gaining valuable real-world experience.
    </p>
    </div>    
        
    <div className="skills_sec">
    <div className="row">
            
        <div className="col-12 col-sm-6 col-lg-3 pb-3">
        <div className="cards_skills">
            <p className="skill_name"> Programming Languages </p>
            <div className="skills">
                <p> HTML </p>
                <p> CSS </p>
                <p> JavaScript </p>
                <p> Java </p>
                <p> MySQL </p>
            </div>
        </div>    
        </div>

        <div className="col-12 col-sm-6 col-lg-3 pb-3">
        <div className="cards_skills">
            <p className="skill_name"> Soft Skills </p>
            <div className="skills">
                <p> Quick Learner </p>
                <p> Critical Thinking </p>
                <p> Creativity </p>
                <p> Time Management </p>
                <p> Desire To Learn </p>
            </div>
        </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 pb-3">
        <div className="cards_skills">
            <p className="skill_name"> Frameworks </p>
            <div className="skills">
                <p> Bootstrap </p>
                <p> React JS </p>
            </div>
        </div>    
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_skills">
            <p className="skill_name"> Languages </p>
            <div className="skills">
                <p> English </p>
                <p> Sinhala </p>
            </div>
        </div>
        </div>

    </div>
    </div>
        
    </div>
    
    </div>
  )
}
