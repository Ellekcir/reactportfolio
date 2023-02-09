import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"




const Footer = () => {
    return ( 

    <footer className="footer navbar-expand-lg bg-light ">
        <div className="container footer-cont">

            <nav>
            <ul className="nav justify-content-center ms-auto mb-2 mb-lg-0">
                <li className="nav-item" ><a href="https://github.com/Ellekcir"><FontAwesomeIcon icon={ faGithub } style={{color: "#8caecb"}} /> </a></li>
                <li className="nav-item" ><a href="http://www.linkedin.com/in/rickelle-griffith"><FontAwesomeIcon icon={ faLinkedin } style={{color: "#8caecb"}} /> </a></li>
                <li className="nav-item" ><a href="mailto:rickelle.1993@live.com.au"><FontAwesomeIcon icon={ faAt } style={{color: "#8caecb"}} /> </a></li>
            </ul>
            </nav>

            <small className="text-muted">Rickelle Griffith</small>


        </div>
    </footer>

    )
}

export default Footer;

