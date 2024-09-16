import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1> Recent Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/* <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a  target="_blank" rel="noreferrer"><h2>Deutsche Telekom - Smart Home Migration to Cumulocity IoT</h2></a>
                <p>Migrated the existing smart home framework to Cumulocity IoT, incorporating enhanced functionalities. Developed front-end applications and Apama streaming analytics solutions using EPL. Utilized Angular, REST APIs, and MongoDB for UI and data handling, and built custom widgets and dashboards.</p>
            </div>
            <div className="project">
                {/* <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a target="_blank" rel="noreferrer"><h2>Boston Scientific - Axeda Migration for Healthcare</h2></a>
                <p>Leading the migration of Axeda systems to Cumulocity IoT for healthcare device management. Developed backend microservices, UI applications, and device agents using C/C++ and Java. Implemented Streaming Analytics with Event Processing Language (EPL). Enhanced security through TPM and certificate-based authentication. Utilized Angular, REST APIs, and Docker to build scalable solutions.</p>
            </div>

            <div className="project">
                {/* <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a target="_blank" rel="noreferrer"><h2>Shape Technologies - IoT Integration for Manufacturing</h2></a>
                <p>Developed backend microservices, UI applications, and widgets for an IoT platform in the manufacturing sector using Cumulocity. Integrated Apama Streaming Analytics and Event Processing Language (EPL) for real-time data processing. Utilized Angular, REST APIs, and Docker to deliver scalable and efficient solutions.</p>
            </div>
            <div className="project">
                {/* <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a target="_blank" rel="noreferrer"><h2>CITEGESTION - IoT Integration for Manufacturing</h2></a>
                <p>Developing backend microservices and frontend UI components for an IoT platform in the manufacturing domain using Cumulocity. Responsible for creating widgets, applications, and enhancing system analytics. Leveraging Angular, REST APIs, and Docker to ensure efficient and scalable solutions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;