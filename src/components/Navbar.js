import React from 'react'

const Navbar = () => {
  return (
   
<nav className="navbar navbar-expand-lg text-info bg-light ">
  <div className="container-fluid ">
    <a className="navbar-brand text-info" href="example.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav position-absolute top-0 end-0 ">
        <li className="nav-item">
          <a className="nav-link active text-info" aria-current="page" href="example.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="example.com">Link</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

  )
}

export default Navbar