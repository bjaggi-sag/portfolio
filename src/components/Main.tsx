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
          <h1>Balpreet Jaggi</h1>
          <p>Full Stack Developer</p>
           <p>I’m a Full Stack Developer and Engineering Lead based in Toronto, specializing in IoT and cloud solutions. With a strong background in developing and migrating complex systems, I’ve led projects ranging from smart home platform migrations to advanced real-time analytics integrations. My expertise includes frontend and backend development, using technologies like Angular, Apama EPL, and Docker. I’m dedicated to building scalable, efficient systems and am passionate about continuous improvement.
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