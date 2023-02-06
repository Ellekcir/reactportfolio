import React from "react";
// REACT FONTAWESOME IMPORTS // <FontAwesomeIcon icon={[]} />; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// import logo from '../logo.png'





const Navbar = () => {
  return (
   
<nav className="navbar navbar-expand-lg bg-light ">
  {/* <div className='container'> */}
  <div className="container-fluid ">
    {/* <img className='logo' src={logo} alt="Logo/NAME" /> */}
    <h1 className="navbar-heading" >RICKELLE GRIFFITH</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#8caecb"}} />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {/* <ul className="navbar-nav position-absolute top-0 end-0 "> */}
        <li className="nav-item active">
          <a className="nav-link" href="example.com">About Me</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="example.com">Portfolio</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="example.com">Contact</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="example.com">Resume</a>
        </li>
      </ul>

    </div>
    </div>
  {/* </div> */}

</nav>

  )
};

export default Navbar