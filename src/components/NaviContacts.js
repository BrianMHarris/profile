import React from 'react';
import './NaviContacts.css';
import NaviContactItem from './NaviContactItem'
import linkedLogo from '../img/svg/nav-linkedin.svg';
import linkedLogoH from '../img/svg/nav-linkedin-hover.svg';
import githubLogo from '../img/svg/nav-github.svg';
import githubLogoH from '../img/svg/nav-github-hover.svg';

// A section of menu "items" (buttons in this case).

const NaviContacts = () => (
  <div>
    <div className="navcontacts-container">
      <NaviContactItem overlayLogo={linkedLogo}
                        revealLogo={linkedLogoH}
                        link="https://www.linkedin.com/in/brian-harris-b875995"/>
      <NaviContactItem overlayLogo={githubLogo}
                        revealLogo={githubLogoH}
                        link="https://github.com/BrianMHarris"/>
    </div>
  </div>
)

export default NaviContacts;
