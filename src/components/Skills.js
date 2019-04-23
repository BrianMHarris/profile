import React from 'react';
import './Skills.css'

const Skills = () => (
  <div className="skills-body">
    <section className="skills-content">
      <div className="skills-title">
        skills & exp
      </div>
      <div className="skills-flex">
        <div className="skills-group">
          <div className="skills-section-title">
            Languages
          </div>
          <div className="skills-section-content">
            <ul>
              <li>
                JavaScript
              </li>
              <li>
                Python
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-section-title">
            Front-end
          </div>
          <div className="skills-section-content">
            <ul>
              <li>
                HTML5
              </li>
              <li>
                CSS3
              </li>
              <li>
                jQuery
              </li>
              <li>
                React
              </li>
              <li>
                D3
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-section-title">
            Back-end
          </div>
          <div className="skills-section-content">
            <ul>
              <li>
                Flask
              </li>
              <li>
                SQLAlchemy
              </li>
              <li>
                Node.js
              </li>
              <li>
                MongoDB
              </li>
              <li>
                APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>

)

export default Skills;
