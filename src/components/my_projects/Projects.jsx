import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div id="projects">
      
    <div className="container-fluid pl-5 pr-5 pt-5 pb-3 p_top">
    <p className="projects_heading"> Projects </p>
    <div className="row">
  
        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_projects">
            <p className="project_name"> WhatsApp Clone </p>
            <a href="https://whatsappcloneweb.netlify.app/"> <img src="images/whatsapp.png" className="img-fluid" alt=""/> </a>
        </div>
        </div>
  
        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_projects">
            <p className="project_name"> Old Portfolio </p>
            <a href="https://oldportfoliowebsite.netlify.app/"> <img src="images/download.png" className="img-fluid" alt=""/> </a>
        </div>
        </div>
          
        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_projects">
            <p className="project_name"> Tic Tac Toe </p>
            <a href="projects_list/tictactoe.html"> <img src="images/tictactoe.jpg" className="img-fluid" alt=""/> </a>
        </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
        <div className="cards_projects">
            <p className="project_name"> Click The Shape </p>
            <a href="projects_list/randomshape.html"> <img src="images/randomshape.png" className="img-fluid" alt=""/> </a>
        </div>
        </div>
  
    </div>
    </div>
  
    </div>
  )
}
