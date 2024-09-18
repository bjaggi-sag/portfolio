import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';

import '../assets/styles/Project.scss';



const projects = [
    {
      title: 'Deutsche Telekom – Smart Home Migration to Cumulocity IoT',
      duration: 'Oct 2019 – Aug 2020',
      role: 'Cumulocity IoT Consultant (Frontend Development & Apama Developer)',
      description: [
        'Developed a custom UI widget for floor plans and asset locations, enabling smooth multi-floor navigation.',
        'Created an EPL application to aggregate data from thousands of sensors, generating metrics like humidity, temperature, and occupancy.',
        'Solved scalability challenges for multi-building data aggregation efficiently.',
        'Ensured data accuracy and optimized user experience across multiple countries, considering timezones.',
      ],
      technologies: ['EPL', 'Angular', 'Node.js', 'Git', 'Jenkins', 'Agile'],
      teamSize: 'Collaborated with a team of 5-6 developers for UI; independently developed the EPL solution.',
    },
    {
      title: 'Boston Scientific – Axeda Migration for Healthcare',
      duration: 'Apr 2021 – Present',
      role: 'Cumulocity IoT Consultant (Frontend & Backend Development)',
      description: [
        'Led migration from Axeda to Cumulocity IoT for healthcare device management.',
        'Developed C++ device agents for 20,000+ devices, customizing Paho MQTT CPP for mutual authentication using TPM.',
        'Implemented file management features (pause, resume, cancel) using the AWS SDK for C++.',
        'Created Azure CI/CD pipelines for automated deployments.',
      ],
      technologies: ['Paho MQTT CPP', 'C++ AWS SDK', 'Azure CI/CD', 'Docker', 'Angular', 'REST APIs'],
      teamSize: '2-4 developers, led UI and device agent development.',
    },
    {
      title: 'CITEGESTION – IoT Integration for Manufacturing',
      duration: 'Jan 2024 – Present',
      role: 'Cumulocity IoT Consultant (Frontend & Backend Development)',
      description: [
        'Led the development of a scalable widget using OpenStreet Maps to visualize 10,000 devices and their real-time events.',
        'Created a map displaying real-time events and alarms, with color-coded device icons based on alarm severity.',
        'Enhanced device visibility and real-time monitoring, improving user experience and data control.',
        'Developed a filtering feature for devices and events by time range, boosting data accessibility.',
        'Implemented Angular’s asynchronous features like Promise.all and RxJS for efficient parallel data retrieval.',
      ],
      technologies: ['OpenStreet Maps', 'Angular', 'REST APIs', 'Async Promises'],
      teamSize: '1 developer, lead developer.',
    },
    {
      title: 'Shape Technologies – IoT Integration for Manufacturing',
      duration: 'Oct 2023 – Feb 2024',
      role: 'Cumulocity IoT Consultant (Frontend & Backend Development)',
      description: [
        'Led the integration of Apama Streaming Analytics into the IoT platform.',
        'Addressed scalability and ensured cross-device compatibility for multiple IoT devices.',
        'Developed custom widgets and backend microservices for real-time data management.',
        'Enabled device control, measurement resets, and real-time data processing.',
        'Implemented EPL scripts for generating metrics and handling high-volume data.',
      ],
      technologies: ['Angular', 'REST APIs', 'Docker', 'Apama EPL', 'Azure CI/CD'],
      teamSize: '2 developers, led EPL development and assisted with UI.',
    },
  ];
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1> Recent Projects</h1>
        <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p><strong>Duration:</strong> {project.duration}</p>
          <p><strong>Role:</strong> {project.role}</p>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <p><strong>Team Size:</strong> {project.teamSize}</p>
        </div>
      ))}
    </div>

    </div>
    );
}

export default Project;