import React from 'react';
import logo from '../logo.png'

const Navbar = () => {
  return (
   
<nav className="navbar navbar-expand-lg text-info bg-light ">
  {/* <div className='container'> */}
  <div className="container-fluid ">
    <img className='logo' src={logo} alt="Logo/NAME" /><a className="navbar-brand text-info" href="example.com">Rickelle Griffith</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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