import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Persistent Systems</h4>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <ul>
              <li>Steered multiple software development projects to successful completion, adhering to timelines and budgets.</li>
              <li>Trained and mentored junior developers on IoT projects, promoting industry best practices and standards.</li>
              <li>Conducted code reviews to enhance code quality and adherence to best practices.</li>
              <li>Designed and maintained a distributed microservices architecture, boosting system modularity and reducing dependencies.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2018 - Oct 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IoT Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Ag</h4>
            <h4 className="vertical-timeline-element-subtitle">Darmstadt, Germany</h4>
            <ul>
             <li>Served as a Full Stack Developer on multiple IoT projects.</li>
             <li>Developed microservices with REST API's using Java Springboot.</li>
             <li>Created IoT device agents using C++ and Java, utilizing libraries such as libcurl and AWS SDK.</li>
             <li>Developed and extended web applications using Angular, HTML &amp; CSS.</li>
             <li>Implemented complex event processing applications and microservices using Apama EPL.</li>
             <li>Utilized unit testing frameworks such as JUNIT5, Mockito and GUnit.</li>
             <li>Created CI/CD scripts for applications in Microsoft Azure.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2016 - May 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Employee</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Ag</h4>
            <h4 className="vertical-timeline-element-subtitle">Darmstadt, Germany</h4>
            <ul>
            <li>Created a comprehensive educational package with tutorials and exercises for university students learning Apama.</li>
            <li>Conducted tutoring sessions to assist enrolled students.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2014 - Mar 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Aricent Group</h4>
            <h4 className="vertical-timeline-element-subtitle">Grurgram, India</h4>
            <ul>
              <li>Developed and extended multiple desktop applications for clients such as GoPro and ABB.</li>
              <li>Supported the testing team by improving and debugging an internal application for automation test suites.</li>
              <li>Utilized multiple technologies such as C, Java, JavaFx, and C#.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;