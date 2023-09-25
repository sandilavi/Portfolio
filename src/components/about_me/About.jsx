import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id="about_me">
          
    <div className="container-fluid about_me padding pl-5 pr-5">
    <div className="intro_sec pb-4">
    <p className="about_heading"> About Me </p>
    <p>
        I'm Sandila Vihanga. I'm 23 years old now. I studied at St. Aloysius' College, Galle. I'm currently taking BEng(Hons) Software 
        Engineering degree at IIT university. My father is a police officer and mother is a registar of marriages. I have a younger 
        sister. My leisure time activity is watching youtube, movies and TV shows. As a Software Engineering student, I love web designing 
        and developing.
    </p>
    </div>    
        
    <div className="skills_sec">
    <div className="row">
            
        <div className="col-12 col-sm-6 col-lg-3 pb-3">
        <div className="cards_skills">
            <p className="underline"> Programming Languages </p>
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
            <p className="underline"> Soft Skills </p>
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
            <p className="underline"> FrameWorks </p>
            <div className="skills">
                <p> Bootstrap </p>
                <p> React JS </p>
            </div>
        </div>    
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_skills">
            <p className="underline"> Languages </p>
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
