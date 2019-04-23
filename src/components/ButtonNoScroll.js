import React from 'react';
import './ButtonNoScroll.css';

// A general-purpose button consisting of an image or label. Probably overkill!
// Consider which of these possible props are truly necessary before creating.
// Props:
//  addClasses (required) - additional classes to give to the "button"
//  link - the hyperlink this button will follow when clicked
//  handleClick - the method to call when clicked
//  logo - the svg to be loaded from the server (relative path recommended)
//  label - the text displayed on the button, only appears if no imgURL provided
//  handleMOn - a passed method to call when the mouseon event fires
//  handleMOff - a passed method to call when the mouseoff event fires
//  type - "submit" or ""

const ButtonNoScroll = (props) => {
  // set up the display: text or image?
  const displayItem = props.logo? <img src={props.logo} alt="IMG"/> :
                        props.label;

  // a silly wrapper to make sure preventDefault is called
  function handleClick(e) {
    e.preventDefault();
    props.handleClick();
  }

  return (
    <button className={`btnns-std ${props.addClasses}`}
          onClick={props.handleClick? handleClick : null}
          onMouseOver={props.handleMOn}
          onMouseOut={props.handleMOff}
          type={props.type}>
      {displayItem}
    </button>
  );
}

export default ButtonNoScroll;
