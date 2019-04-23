import React, { Component } from "react"
import "./Contact.css";
import ContactForm from "./ContactForm";
import ButtonNoScroll from '../components/ButtonNoScroll'

class Contact extends Component {
  render() {
    return (
      <div className="contact-content">
        <div id="contact"></div>
        <div className="contact-title">
          contact me
        </div>
        <div className="contact-flex">
          <div className="contact-body">
            <p>
              If you have an inquiry or would like to speak with me about a project:
            </p>
            <div className="contact-email">
              <a href="mailto:brianharris.dev@gmail.com">
                <ButtonNoScroll addClasses="btnns-hvr btnns-contact btnns-large"
                      label="Send an Email"
                />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <p>
              or fill out this handy form:
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

    );
  }
}

export default Contact;
