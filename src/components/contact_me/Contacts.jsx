import React from 'react'
import './Contacts.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contacts() {
  return (
    <div id="contact_me">
    <div className="container-fluid pl-5 pr-5 pb-3 p_top">
    
        <div className="row">
        <div className="ml-auto mr-1 p_bottom">    
            <a href="https://www.linkedin.com/in/sandila-vihanga-79033b223/" target="_blank" rel="noreferrer" className="social_media_icons"> <LinkedInIcon/> </a>
            <a href="https://github.com/sandilavi" target="_blank" rel="noreferrer" className="social_media_icons"> <GitHubIcon/> </a>
        </div>   
        </div>    
        
        <p className="contacts_heading"> Contact Me </p>
    
        <form action="https://formspree.io/f/xnqkgoao" method="POST">
        <div className="row">
            <div className="col-12 col-md-6">
                <input type="text" name='Name' placeholder='Name' className="form_fields input_fields center" required/>
            </div>

            <div className="col-12 col-md-6">
                <input type="email" name='Email' placeholder='Email' className="form_fields input_fields center" required/>
            </div>

            <div className="col-12">
                <input type="text" name='Subject' placeholder='Subject' className="form_fields input_fields center" required/>    
            </div>

            <div className="col-12">
                <textarea name='Message' placeholder='Message' className="form_fields message center" required/>   
            </div>

            <div className="col-12">
                <button type='submit' className="btn submit_btn">Let's Talk</button>  
            </div>
        </div>       
        </form>
    
    </div>
    </div>
  )
}
