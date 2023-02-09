import React from "react";
// REACT FONTAWESOME IMPORTS // <FontAwesomeIcon icon={[]} />; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// import logo from '../logo.png'


const Header = ({ currentPage, handlePageChange }) => {
  return (
   
<nav className="navbar navbar-expand-lg bg-light ">
  {/* <div className='container'> */}
  <div className="container-fluid ">
    {/* <img className='logo' src={logo} alt="Logo/NAME" /> */}
    <h1 className="navbar-heading" href="#">RICKELLE GRIFFITH</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#8caecb"}} />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >Home</a>
        </li>
      {/* <ul className="navbar-nav position-absolute top-0 end-0 "> */}
        <li className="nav-item active">
          <a href="#about" onClick={() => handlePageChange('About Me')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className= {currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >About Me</a>
        </li>
        <li className="nav-item active">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</a>
        </li>
        <li className="nav-item active">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a>
        </li>
        <li className="nav-item active">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</a>
        </li>
      </ul>

    </div>
    </div>
  {/* </div> */}

</nav>

  )
};

export default Header