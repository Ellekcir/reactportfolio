import React from "react";
import Project from "../Project";

export default function Portfolio() {
    const projects = [
        {
            name: "Travel Stash",
            repo: "https://github.com/Ellekcir/Social-Network-API",
            link: "https://github.com/Ellekcir/Social-Network-API",
            description: "blah blah",
            image: "TRAVEL-STASH"
        },
        {
            name: "Travel Stash",
            repo: "https://github.com/Ellekcir/Social-Network-API",
            link: "https://github.com/Ellekcir/Social-Network-API",
            description: "blah balh",
            image: "TRAVEL-STASH"
        },
        {
            name: "Travel Stash",
            repo: "https://github.com/Ellekcir/Social-Network-API",
            link: "https://github.com/Ellekcir/Social-Network-API",
            description: "blah balh",
            image: "TRAVEL-STASH"
        }
    ];

    return (
    <div> 
        {projects.map(project => (
            <Project project={project} key={project.name} />
        ))}
        
    </div>)
}






// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository