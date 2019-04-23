import React, {Component} from 'react';
import './Navi.css';
import NaviToggle from '../components/NaviToggle';
import NaviMenu from '../components/NaviMenu';
import logo from '../img/svg/nav-menu.svg';
import openLogo from '../img/svg/nav-menu-hover.svg';

var disableScroll = require('disable-scroll');

class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      toggleClicked: false,
      lastScrollTop: 0,
      maxTop: -60,
      topPos: 0,
      naviHidden: null
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  // scrolls the navbar away
  handleScroll(event) {
    // determine how much the webpage has been scrolled to move the navbar's top position
    let newScrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    let newNaviHidden = (newScrollTop > this.state.lastScrollTop
                            && newScrollTop > 200)? "navi-hidden" : null;
    this.setState({
      lastScrollTop: newScrollTop,
      naviHidden: newNaviHidden
    });
  }

  // This is a special wrapper for toggle, only when NaviToggle is clicked
  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    this.toggle();
  }

  toggle() {
    let display = window.getComputedStyle(this.refs.naviToggle).display;
    // needs to be wrapped up because the link buttons are re-used in dropdown menu
    if (display !== "none") {
      // happens before the state change so it's a little backwards looking.
      if (this.state.isOpen) { // this is the act of closing
        disableScroll.off();
        this.setState({isOpen: false});
      } else { // the act of opening
        disableScroll.on();
        this.setState({isOpen: true});
      }
    }
  }

  render() {
    let addClass = this.state.isOpen? "navi-menu-visible": "";

    return (
      <div className={`navi-container navi-fixed-top ${this.state.naviHidden}`}
            style={{top: this.state.topPos}}>
        <div className={`navi-menu ${addClass}`}>
          <NaviMenu handleClick={this.toggle}/>
        </div>
        <div ref="naviToggle" className="navi-toggle">
          <NaviToggle
            handleClick={this.handleToggle}
            logo={logo}
            openLogo={openLogo}
            isOpen={this.state.isOpen}/>
        </div>
      </div>
    );
  }
}

export default Navi;
