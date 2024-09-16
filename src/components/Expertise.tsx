import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faGit, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faAngular, faJava, faJs, faHtml5, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons';
import { faPlug, faDatabase as faSolidDatabase, faEnvelope, faDatabase } from '@fortawesome/free-solid-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Springboot",
    "Angular",
    "TypeScript",
    "JavaScript",,
    "C/C++",
    "HTML5",
    "CSS3",
    "SASS",
    "SQL",
    "PostgreSQL",
    "Postman",
    "REST API"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux"
];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icons">
                        <FontAwesomeIcon icon={faAngular} size="3x"/>
                        <FontAwesomeIcon icon={faJava} size="3x" title="Java" />
                        <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" />
                        <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML5" />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" title="CSS3" />
                        <FontAwesomeIcon icon={faSass} size="3x" title="SASS" />
                        <FontAwesomeIcon icon={faDatabase} size="3x" title="SQL" />
                        <FontAwesomeIcon icon={faEnvelope} size="3x" title="Postman" />
                        <FontAwesomeIcon icon={faPlug} size="3x" title="REST API" />
                    </div>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icons">
                        <FontAwesomeIcon icon={faDocker} size="3x" title="Docker" /> 
                        <FontAwesomeIcon icon={faGit} size="3x" title="Git" />
                        <FontAwesomeIcon icon={faGithub} size="3x" title="GitHub Actions" />
                        <FontAwesomeIcon icon={faAws} size="3x" title="AWS" />
                        <FontAwesomeIcon icon={faLinux} size="3x" title="Linux" />
                    </div>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default Expertise;