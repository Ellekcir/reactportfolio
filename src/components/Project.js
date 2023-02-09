import React from 'react';



function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <div className="project">
      <img className="project-image"
        src={require(`../assets/${image}.jpg`)}
        alt={name}
      />
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
