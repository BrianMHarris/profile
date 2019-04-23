import React, { Component } from 'react';
import "./Projects.css"
import ProjectEntry from '../components/ProjectEntry';
import logoTunelark from '../img/tunelark_logo.png';
import mobileTunelark from '../img/tunelark_mobile.png';
import logoCourse from '../img/course_logo.png';
import mobileCourse from '../img/course_mobile.png';
import logoPortfolio from '../img/svg/proj-portfolio.svg';
import logoNodemail from '../img/svg/proj-nodemail.svg';
import logoRaid from '../img/svg/proj-raid.svg';
import logoAliens from '../img/svg/proj-aliens.svg';

const tunelarkDesc = "Site-wide improvements to CSS, teacher management tool updates, bug-fixes, and more.";
const courseDesc = "Enterprise feature, CSS improvements, database model, bug-fixes, and more.";
const portfolioDesc = "An ever-evolving, personal portfolio website with mostly homegrown components (for self-teaching purposes).";
const noderelayDesc = "Go-between server for sending email from a client contact form, using Nodemailer.";
const raidDesc = "Casual Gameplay Prototype of a simple mobile roleplaying game's core loop. Built in 4 days."
const alienDesc = "A visualization of reported alien sightings for 50 states, over nearly two decades."

class Projects extends Component {
  render() {
    return (
      <div className="projects-content">
        <div id="projects"></div>
        <div className="projects-title">
          work & projects
        </div>
        <div className="projects-flex">
          <ProjectEntry
            addClass="pe-tunelark"
            title="Full Stack Developer"
            desc={tunelarkDesc}
            tech="JS, HTML, CSS (Sass), Ruby on Rails"
            liveLink="http://www.tunelark.com/"
            respons={["Responsive improvements", "Home page footer", "Bug fixes", "Test coverage"]}
            logo={logoTunelark}
            image={mobileTunelark}/>
          <ProjectEntry
            addClass="pe-course"
            title="Full Stack Developer"
            desc={courseDesc}
            tech="JS, HTML, CSS (Sass), React, Ruby on Rails"
            liveLink="https://www.coursereport.com/enterprise"
            respons={["Enterprise feature", "CSS improvements", "Backend implementation", "Test coverage"]}
            logo={logoCourse}
            image={mobileCourse}/>
          <ProjectEntry
            addClass="pe-portfolio"
            label="brianharris.co"
            title="Personal Portfolio"
            desc={portfolioDesc}
            tech="JS, React, CSS"
            liveLink="http://www.brianharris.co/"
            gitLink="https://github.com/BrianMHarris/profile-main"
            logo={logoPortfolio}/>
          <ProjectEntry
            addClass="pe-tan"
            label="Node Mail Relay"
            title="Personal Project"
            desc={noderelayDesc}
            tech="JS, Node.js, Nodemailer, Express"
            gitLink="https://github.com/BrianMHarris/node-mail-relay"
            logo={logoNodemail}/>
          <ProjectEntry
            addClass="pe-dark"
            label="Raid! Demo"
            title="Personal Project"
            desc={raidDesc}
            tech="JS, Canvas, jQuery"
            liveLink=""
            gitLink="https://github.com/BrianMHarris/dungeons"
            logo={logoRaid}/>
          <ProjectEntry
            addClass="pe-blue"
            label="Alien Sightings"
            title="Personal Project"
            desc={alienDesc}
            tech="Python, BeautifulSoup, JS, D3"
            liveLink="https://brianmharris.github.io/"
            gitLink="https://github.com/BrianMHarris/brianmharris.github.io"
            logo={logoAliens}/>
        </div>

      </div>
    );
  }
}

export default Projects;
