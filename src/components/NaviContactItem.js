import React from 'react';
import './NaviContactItem.css';

// A button that show an overlay image and a revealed image when hovered
//  Provides a little user feedback when hovered over. On mobile the hover
//  will not work. Link will have to be provided to both overlay and button!
// Props:
//  overlayLogo - the svg that displays in the resting state
//  revealLogo - the text displayed on the button, only appears if no imgURL provided
//  link - link to follow when this item is clicked

const NaviContactItem = (props) => {
  return (
    <div className="ncitem ncitem-container">
      <a href={props.link}>
        <div className="ncitem ncitem-img ncitem-reveal">
            <img src={props.revealLogo} alt="IMG"/>
        </div>
        <div className="ncitem ncitem-img ncitem-overlay">
            <img src={props.overlayLogo} alt="IMG"/>
        </div>
      </a>
    </div>
  );
}

export default NaviContactItem;
