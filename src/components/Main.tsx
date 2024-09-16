import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section" id = "about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/balpreet.jpg")} alt="img" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bjaggi-sag/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/balpreet-singh-jaggi-72308471/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Balpreet S. Jaggi</h1>
          <p>Full Stack Developer</p>
           <p>A Full Stack Developer and Engineering Lead with expertise in IoT and cloud solutions. Based in Toronto, I have a background in distributed software systems and a track record of leading successful projects. I’m passionate about building efficient, scalable systems and continuously improving my craft. Outside of work, I enjoy hiking, fitness, and reading.
           </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/bjaggi-sag/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="hhttps://www.linkedin.com/in/balpreet-singh-jaggi-72308471/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;