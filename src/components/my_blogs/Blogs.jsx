import React from 'react'
import './Blogs.css'

export default function Blogs() {
  return (
    <div id="blogs">
              
    <div className="container-fluid padding pl-5 pr-5">
    <p className="blogs_heading"> Blogs </p>
    <div className="row">

        <div className="col-6">
        <div className="cards">
            <p className="underline"> AI and Ethics </p>
            <p> Artificial intelligence (AI) refers to intelligence demonstrated by machines as opposed to natural intelligence demonstrated by animals, such as humans. Artificial intelligence was established as a field of study in 1956. Since its inception, AI research has tried and rejected a variety of approaches, including simulating the brain, modeling human problem solving, formal logic, large knowledge databases, and imitating animal behavior. Machine learning with a high mathematical-statistical component dominated the field in the first decades of the twenty-first century, and this technique has proven to be extremely successful in solving a variety of difficult problems. 
            <a href="blogs_list/ai.html"> Read More... </a>
            </p>
        </div>
        </div>
        
        <div className="col-6">
        <div className="cards">    
            <p className="underline"> Internet of Things and its Cyber Security Implications </p>
            <p> The Internet of Things (IoT) refers to physical objects that are equipped with sensors, processing ability, software, and other technologies. Devices do not need to be connected to the public internet; instead, they must be connected to a network. The first ARPANET-connected device was a Coca-Cola vending machine, which became the first Internet of Things (IOT) in 1982. Reza Raji defined the concept in 1994 as sending little data packets to a large number of nodes in order to integrate and automate everything from home appliances to huge industries. In 1999, Bill Joy presented his "Six Webs" concept at Davos, which included device-to-device communication.  
            <a href="blogs_list/iot.html"> Read More... </a>
            </p>
        </div>
        </div>

    </div>
    </div>
    
    </div>
  )
}
