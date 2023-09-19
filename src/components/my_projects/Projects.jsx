import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div id="projects">
      
    <div class="container-fluid padding pl-5 pr-5">
    <p class="headings"> Projects </p>
    <div class="row">
  
        <div class="col-12 col-sm-6 col-lg-4">
        <div class="cards">
            <p class="underline"> Guess My Number </p>
            <a href="projects/guessnum.html"> <img src="images/guessnum.jpg" class="img-fluid" alt=""/> </a>
        </div>
        </div>
  
        <div class="col-12 col-sm-6 col-lg-4">
        <div class="cards">
            <p class="underline"> Tic Tac Toe </p>
            <a href="projects/tictactoe.html"> <img src="images/tictactoe.jpg" class="img-fluid" alt=""/> </a>
        </div>
        </div>
          
        <div class="col-12 col-sm-6 col-lg-4">
        <div class="cards">
            <p class="underline"> Click the Random Shape </p>
            <a href="projects/randomshape.html"> <img src="images/randomshape.png" class="img-fluid" alt=""/> </a>
        </div>
        </div>
  
    </div>
    </div>
  
    </div>
  )
}
