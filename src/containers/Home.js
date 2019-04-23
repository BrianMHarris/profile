import React, { Component } from 'react';
import "./Home.css"


class Home extends Component {
  render() {
    return (
      <div className="hm-content">
        <div id="home"></div>
        <div className="hm-title">
          <div className="hm-title-intro">
            Hi, my name is
          </div>
          <div className="hm-title-name">
            Brian Harris.
          </div>
          <div className="hm-title-job">
            I'm a Full Stack Web Developer
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
