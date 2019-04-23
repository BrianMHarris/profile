// DEPRECATED

import React, { Component } from 'react';
import './WorkEntry.css';
import ModalDisplay from "./ModalDisplay";

var disableScroll = require('disable-scroll');

// A self-contained work entry for the work list
// Props:
//  logo - the svg item to pass down to the button
//  label - the text displayed when moused over
//  title - job title held on this project
//  desc - short description of the tasks
//  respons - responsibilities to list
//  bgColor - background color for this particular entry. TODO: use vars

class WorkEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(event) {
    disableScroll.on();
    this.setState({showModal: true});
  }

  handleCloseModal(event) {
    event.stopPropagation();
    disableScroll.off();
    this.setState({showModal: false});
  }

  // build a list of responsibilities on this project
  buildReponsibilities(respons) {
    var keys = 0;
    if (this.props.respons) {
      return this.props.respons.map(i => (
        <li key={keys++}>
          {i}
        </li>
      ));
    }
  }

  render() {
    return (
      <div className="we-content"
            style={{"backgroundColor": `${this.props.bgColor}`}}
            onClick={this.handleOpenModal}>
        <div className="we-main">
          <div className="we-main-image">
            <img src={this.props.logo} alt="Course Report"/>
          </div>
          <div className="we-main-job">
            {this.props.title}
          </div>
        </div>
        <ModalDisplay
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          label={this.props.label}
          image={this.props.image}
          desc={this.props.desc}
          tech={this.props.tech}
          liveLink={this.props.liveLink}
          respons={this.buildReponsibilities(this.props.respons)}
        />
      </div>
    );
  }
}

export default WorkEntry;
