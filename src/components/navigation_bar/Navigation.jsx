import React from 'react'
import './Navigation.css'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div id="navbar">
      
    <nav className="navbar navbar-dark bg-dark fixed-top">    
      <ul className="navbar-nav mx-auto">

        <li className="nav-item mr-4 d-sm-none">
          <a> <Link to={"/"} className="nav-link"> <HomeIcon/> </Link> </a>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <a> <Link to={"/"} className="nav-link"> Home </Link>  </a>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <a> <Link to={"/about"} className="nav-link"> <Person2Icon/> </Link> </a>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <a> <Link to={"/about"} className="nav-link"> About Me </Link> </a>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <a> <Link to={"/blogs"} className="nav-link"> <LibraryBooksIcon/> </Link> </a>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <a> <Link to={"/blogs"} className="nav-link"> Blogs </Link> </a>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <a> <Link to={"/projects"} className="nav-link"> <WorkIcon/> </Link> </a>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <a> <Link to={"/projects"} className="nav-link"> Projects </Link> </a>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <a> <Link to={"/contacts"} className="nav-link"> <EmailIcon/> </Link> </a>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <a> <Link to={"/contacts"} className="nav-link"> Contact Me </Link> </a>
        </li>

      </ul>    
    </nav>
    
    </div>
  )
}
