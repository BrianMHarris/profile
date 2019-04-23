// DEPRECATED

import React, { Component } from 'react';
import "./Work.css"
import WorkEntry from '../components/WorkEntry'

import logoTunelark from '../img/tunelark_logo.png';
import mobileTunelark from '../img/tunelark_mobile.png';
import logoCourse from '../img/course_logo.png';
import mobileCourse from '../img/course_mobile.png';

const tunelarkDesc = "Site-wide improvements to CSS, teacher management tool updates, bug-fixes, and more.";
const courseDesc = "Enterprise feature, CSS improvements, database model, bug-fixes, and more.";

class Work extends Component {
  render() {
    return (
      <div className="work-content">
        <div id="work"></div>
        <div className="work-flex">
          <WorkEntry  logo={logoTunelark}
                      label="Tunelark"
                      image={mobileTunelark}
                      title="Full Stack Developer"
                      desc={tunelarkDesc}
                      tech="JS, HTML, CSS(Sass), Ruby on Rails"
                      liveLink="https://www.tunelark.com/home"
                      respons={["Responsive improvements", "Home page footer", "Bug fixes", "Test coverage"]}
                      bgColor="#1e95e2" />
          <WorkEntry logo={logoCourse}
                      label="Course Report"
                      image={mobileCourse}
                      title="Full Stack Developer"
                      desc={courseDesc}
                      tech="JS, HTML, CSS(Sass), React, Ruby on Rails"
                      liveLink="https://www.coursereport.com/enterprise"
                      respons={["Enterprise feature", "CSS improvements", "Backend implementation", "Test coverage"]}
                      bgColor="#68b545"/>
        </div>
        <div className="work-link">
          <div>
            <div className="work-divider-high"></div>
            <div className="work-link-txt">
              See more work experience at&nbsp;
              <a href="https://www.linkedin.com/in/brian-harris-b875995/">LinkedIn</a>
            </div>
            <div className="work-divider-low"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Work;
