import React, {Component} from 'react';
import "./ProjectEntry.css";
import PropTypes from 'prop-types';
import ButtonNoScroll from './ButtonNoScroll';
import ModalDisplay from "./ModalDisplay";
var disableScroll = require('disable-scroll');

class ProjectEntry extends Component {
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

  // build a hyperlink around a button, used for live, git, linkedIn, etc.
  buildLinkButton(link, label) {
    if (link) {
      return(
        <div className="pe-buttons-btn">
          <a href={link}>
            <ButtonNoScroll
              addClasses="btnns-linked"
              label={label}
            />
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={`pe-content ${this.props.addClass}`}
        onClick={this.handleOpenModal}>
        <div className="pe-main">
          <div className="pe-main-image">
            <img src={this.props.logo} alt="Portfolio"/>
          </div>
          <div className="pe-main-label">
            {this.props.label}
          </div>
        </div>
        <div className="pe-main-title">
          {this.props.title}
        </div>
        <div className="pe-main-tech">
          {this.props.tech}
        </div>
        <ModalDisplay
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          label={this.props.label}
          image={this.props.image}
          desc={this.props.desc}
          tech={this.props.tech}
          liveLink={this.props.liveLink}
          gitLink={this.props.gitLink}
          respons={this.buildReponsibilities(this.props.respons)}
        />
      </div>
    );
  }
}

ProjectEntry.propTypes = {
  addClass: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  tech: PropTypes.string,
  liveLink: PropTypes.string,
  gitLink: PropTypes.string,
  logo: PropTypes.string
};

export default ProjectEntry;
