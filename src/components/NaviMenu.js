import React from 'react';
import './NaviMenu.css';
import Button from './Button'
import NaviContacts from '../components/NaviContacts';

// A section of menu "items" (buttons in this case).

const NaviMenu = (props) => (
  <div className="navmenu-container">
    <div className="navmenu-btns">
      <Button label="Home"
              addClasses="btn-hvr btn-nav"
              link="#home"
              handleClick={props.handleClick}/>
      <Button label="Work"
              addClasses="btn-hvr btn-nav"
              link="#projects"
              handleClick={props.handleClick}/>
      <Button label="About"
              addClasses="btn-hvr btn-nav"
              link="#about"
              handleClick={props.handleClick}/>
      <Button label="Contact"
              addClasses="btn-hvr btn-nav"
              link="#contact"
              handleClick={props.handleClick}/>
    </div>
    <div className="navmenu-horzline"></div>
    <div className={`navmenu-contact-links`}>
      <NaviContacts />
    </div>
  </div>
)

export default NaviMenu;
