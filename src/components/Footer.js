import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"




const Footer = () => {
    return ( 
    <footer className="footer navbar-expand-lg bg-light ">
        <div className="container-fluid ">

            <nav>
            <ul className="nav justify-content-center ms-auto mb-2 mb-lg-0">
                <li className="nav-item" ><a href="https://github.com/Ellekcir"><FontAwesomeIcon icon={ faGithub } style={{color: "#8caecb"}} /> </a></li>
                <li className="nav-item" ><a href="linkedin.com/in/rickelle-griffith"><FontAwesomeIcon icon={ faLinkedin } style={{color: "#8caecb"}} /> </a></li>
                <li className="nav-item" ><a href="mailto:rickelle.1993@live.com.au"><FontAwesomeIcon icon={ faAt } style={{color: "#8caecb"}} /> </a></li>
            </ul>
            </nav>
            <div>
            <small className="text-muted">Rickelle Griffith</small>
            </div>
            {/* <ul className="footer-link nav justify-content-center">
                <li className="nav-item" href="https://github.com/Ellekcir" FontAwesomeIcon icon={fa-brands fa-github} style={{color: "#8caecb"}} />              
           
                <li className="nav-item" href="linkedin.com/in/rickelle-griffith"> <FontAwesomeIcon icon="fa-brands fa-linkedin " />          
                </li>
                <li className="nav-item" href="mailto:rickelle.1993@live.com.au"><FontAwesomeIcon icon="fa-regular fa-at" />      
                </li>
            </ul> */}

           
        </div>
    </footer>

    )
}

export default Footer;

