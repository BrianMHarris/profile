import React from 'react';
import './NaviToggle.css';

// The toggle button for collapsing menu items on smaller screens
// Props:
//  handleClick - the function passed from the parent down to the button
//  logo - the svg item to pass down to the button
//  label - the text displayed on the button, only appears if no imgURL provided
//  isOpen - whether the menu is open or not

const NaviToggle = (props) => {
  // a silly wrapper to make sure preventDefault is called
  function handleClick(e) {
    e.preventDefault();
    props.handleClick();
  }

  function displayToggle(isOpen) {
    if (isOpen) {
      return (
        <img src={props.openLogo} alt={props.label}/>
      )
    }
    return (
      <img src={props.logo} alt={props.label}/>
    )
  }

  return (
    <div className="navitoggle-std"
          onClick={handleClick}>
      {displayToggle(props.isOpen)}
    </div>
  )
};

export default NaviToggle;
