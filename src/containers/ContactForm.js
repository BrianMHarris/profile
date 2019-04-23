import React, { Component } from "react";
import CryptoJS from 'crypto-js';
import './ContactForm.css';
import ButtonNoScroll from '../components/ButtonNoScroll';
import Alert from '../components/Alert'

const DEFAULT_STATE = {
  fullName: "",
  email: "",
  subject: "",
  body: ""
}

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      subject: "",
      body: "",
      alertState: "hidden"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAlertHide = this.handleAlertHide.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value}
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleAlertHide();

    let payload = {
      fullName: this.state.fullName,
      email: this.state.email,
      subject: this.state.subject,
      body: this.state.body
    }

    // encrypt the payload with CryptoJS!
    let payloadJSON = JSON.stringify(payload);
    let encrypted = CryptoJS.AES.encrypt(
      payloadJSON, process.env.REACT_APP_SECRET);
    encrypted = encrypted.toString();

    // capture "this"
    let form = this;
    fetch(process.env.REACT_APP_MAIL_SERVER, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        encrypted
      })
    })
    .then((res) => {
      if (res.ok === false)
        throw res;
      return res.json()
    })
    .then((responseJSON) => {
      if ("success" in responseJSON) {
        console.log("Mail successfully delivered");
        // reset the state for inputs if no problem
        form.setState(DEFAULT_STATE);

        // "flash" a message
        this.setState({alertState: "success"});
      } else {
        console.log("Error: " + responseJSON.fail);
        // "flash" a message
        this.setState({alertState: "fail"});
      }
    })
    .catch((err) => {
      console.error(err);
      // "flash" a message
      this.setState({alertState: "fail"});
    });
  }

  handleAlertHide(event) {
    if (event) event.preventDefault();
    this.setState({alertState: "hidden"});
  }

  render() {
    let alertMsg = {};
    if (this.state.alertState) {
      alertMsg.text = this.state.alertState === 'success' ?
        'Email successfully sent' :
        'Error occurred, please try email link';
      alertMsg.type = this.state.alertState;
    }

    return (
      <div className="cf-form">
        <div className="cf-body">
        </div>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="cf-inputs-wrap">
            <input id="cf-fullName" type="text" name="fullName"
                    className="cf-input-name"
                    placeholder="name"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    required/>
            <input type="email" name="email"
                    className="cf-input-email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required/>
          </div>
          <div className="cf-inputs-fixed">
            <textarea type="text" name="body"
                  className="cf-input-large cf-input-body"
                  placeholder="message"
                  value={this.state.body}
                  onChange={this.handleChange}
                  required/>
          </div>
          <ButtonNoScroll label="Submit"
                  link="contact"
                  type="submit"
                  addClasses="btnns-hvr btnns-contact btnns-nomargins"
                  data-test="button" />
        </form>
        <div className="cf-alert">
          <Alert
            message={alertMsg}
            onClose={this.handleAlertHide}
          />
        </div>
      </div>
    );
  }
}


export default ContactForm;
