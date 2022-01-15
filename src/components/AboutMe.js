import React from "react"
import "./style/AboutMe.css"

const AboutMe = () => {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container" >
            <img className="profile-pic profile" src="https://media-exp1.licdn.com/dms/image/C5603AQGiVcHrmOSEuA/profile-displayphoto-shrink_800_800/0/1628729496570?e=1647475200&v=beta&t=cGNGV23xJ0zn8i5hVM4rHtk1-meehKjzNxp_1vDGGy8" alt="pic of tino"/> 
            <h1 className="name" id="name"><strong>Tino Ganacias</strong></h1>
            <p className="lead" id="portfolio">After earning my Bachelors of Arts degree from the University of Michigan, I entered the world of restaurants and hospitality exploring my passion for service, creativity, and entrepeneurialism.  I've realized my heart and my brain are rooted in patterns, logic, and coding.  I am focused and excited to enter the world of computer technology and computer programming, with a foundation of building successful businesses and people management.</p>
        </div>
        </div>
    );
}

export default AboutMe;
