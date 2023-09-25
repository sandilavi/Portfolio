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
          <Link to={"/"} className="nav-link"> <HomeIcon/> </Link>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <Link to={"/"} className="nav-link"> Home </Link>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <Link to={"/about"} className="nav-link"> <Person2Icon/> </Link>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <Link to={"/about"} className="nav-link"> About Me </Link>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <Link to={"/blogs"} className="nav-link"> <LibraryBooksIcon/> </Link>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <Link to={"/blogs"} className="nav-link"> Blogs </Link>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <Link to={"/projects"} className="nav-link"> <WorkIcon/> </Link>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <Link to={"/projects"} className="nav-link"> Projects </Link>
        </li>

        <li className="nav-item mr-4 d-sm-none">
          <Link to={"/contacts"} className="nav-link"> <EmailIcon/> </Link>
        </li>
        <li className="nav-item mr-4 d-none d-sm-block">
          <Link to={"/contacts"} className="nav-link"> Contact Me </Link>
        </li>

      </ul>    
    </nav>
    
    </div>
  )
}
