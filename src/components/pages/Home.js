import React from "react";
import Profile from "../../assets/profile.jpg"

const Home = () => {
 return (
  
    <section className="home-section-main">
      <div className="home-container">
      <div className="HomeCont"  >
        <h1 className="home-title">Hi, I'm Rickelle</h1>
        <h3 className="home-subtitle">I'm a Full-Stack Web Developer</h3>
        <p className="description">Adelaide based</p> 
        </div>
        <div className="PictureCont"  >
           <img className="ProfilePic"
          src={Profile}
          alt="Rickelle"/>
          </div>
      </div>
    </section>
  )
}

export default Home;


