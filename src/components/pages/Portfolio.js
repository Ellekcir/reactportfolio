import React from "react";
import Project from "../Project";

export default function Portfolio() {
    const projects = [
        {
            name: "Travel Stash",
            repo: "https://github.com/Kokkonut/travel-stash",
            link: "https://kokkonut.github.io/travel-stash/",
            description: "Travel application using various of API's and organised trips",
            image: "TRAVEL-STASH"
        },
        {
            name: "Technology Blog",
            repo: "https://github.com/Ellekcir/techblog-mvc",
            link: "https://github.com/Ellekcir/techblog-mvc",
            description: "'MVC Tech Blog' is a website using the Model-View-Controller format, a mysql database using database modellingis done through the Sequelize ORM for MySQL. Built using MySQL2, Express, express-handlebars, express-session, Sequelize, bcrypt and dotenv.",
            image: "TechBlog"
        },
        {
            name: "JATE",
            repo: "https://github.com/Ellekcir/PWA-text-editor",
            link: "https://texteditor-jsdl.herokuapp.com/",
            description: "This project is a Progressive Web Application. 'Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.' This PWA is a text editor that runs through a browser and enables you to install and use offline.",
            image: "JATE"
        },
        {
            name: "Hospo-Ordering",
            repo: "https://github.com/Kokkonut/hospo-order",
            link: "https://hospo-order.herokuapp.com/",
            description: "This project is a MERN stack based application which uses MongoDB, Express, React, and Node.js. The design of this application is for pre ordering coffee/food from local cafes and restaurants. It features two applications sharing a common backend, in order to communicate with the user and the cafe/restaurant.",
            image: "CAFE-APP"
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