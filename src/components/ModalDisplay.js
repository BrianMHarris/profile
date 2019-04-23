import React from 'react';
import './ModalDisplay.css';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ButtonNoScroll from './ButtonNoScroll'


const ModalDisplay = (props) => {
  // a bit of a hack to block clicks through the modal, which can cause "handleOpenModal"
  //  to keep firing.
  function blockClickthrough(event) {
    event.stopPropagation();
  }

  function displayImage(image) {
    if (image) {
      return (
        <div className="md-image">
          <img src={image} alt="Content missing or not"/>
          <div className="md-image-overlay"></div>
        </div>
      );
    }
  }

  function buildLinkButton(link, label) {
    if (link) {
      return(
        <div className="pe-buttons-btn">
          <a href={link}>
            <ButtonNoScroll
              addClasses="btnns-hvr btnns-contact"
              label={label}
            />
          </a>
        </div>
      );
    }
  }

  return (
    <div onClick={blockClickthrough}>
      <Modal
        // parentSelector={getParent}
        className="md-main"
        overlayClassName="md-overlay"
        isOpen={props.showModal}
        onRequestClose={props.handleCloseModal}
        >
        <div className="md-close-btn">
          <button onClick={props.handleCloseModal}>X</button>
        </div>
        <div className="md-flex">
          {displayImage(props.image)}

          <div className="md-details">
            <div className="md-title">
              {props.label}
            </div>
            <div className="md-desc">
              {props.desc}
            </div>
            <div className="md-tech">
              Tech: <span className="md-tech-skills">{props.tech}</span>
            </div>
          </div>
        </div>
        <div className="md-link-btns">
          <div className="md-visit-btn">
            {buildLinkButton(props.liveLink, "Web")}
          </div>
          <div className="md-linkOrGit-btn">
            {props.gitLink? buildLinkButton(props.gitLink, "GitHub") :
                            buildLinkButton("https://www.linkedin.com/in/brian-harris-b875995/", "Details")}
          </div>
        </div>
      </Modal>
    </div>
  );
}

ModalDisplay.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  label: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.string,
  liveLink: PropTypes.string,
  gitLink: PropTypes.string,
  respons: PropTypes.array
};

export default ModalDisplay;
