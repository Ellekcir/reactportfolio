import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { faAt } from "@fortawesome/free-solid-svg-icons"



import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Name is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="contact-section">
    <h2 className="contact-title">Contact Me</h2>
    {/* <div className="contact-container  container grid">
    <ul className="d-flex flex-row">
            <li className='p-2 col-3'><a href="https://github.com/Ellekcir"><FontAwesomeIcon icon={ faGithub } style={{color: "#8caecb"}} /> </a> GitHub</li>
            <li className='p-2 col-3'><a href="www.linkedin.com/in/rickelle-griffith"><FontAwesomeIcon icon={ faLinkedin } style={{color: "#8caecb"}} /> </a> Linked In</li>
            <li className='p-2 col-3'><a href="mailto:rickelle.1993@live.com.au"><FontAwesomeIcon icon={ faAt } style={{color: "#8caecb"}} /> </a> Email</li>
        </ul>
    </div> */}
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-container">
          <div className="grid">
            <div className="contact-user primary">
              <label>Name:</label>
              <input type="text" name="name" className="contact-input" defaultValue={name}
                onBlur={handleChange} />
            </div>


            <div>
              <label>Email address:</label>
              <input
                className="contact-input"
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>

            <div>
              <label >Message:</label>
              <textarea
                className="contact-input"
                name="message"
                rows="0"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <a href="/" className="button button--flex">
            <button type="submit" className='submit-button'>Submit</button></a>
      </div></form>
      
    </section>
  );
}

export default Contact;

