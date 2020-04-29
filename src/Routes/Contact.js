import React, { Component } from "react";
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default class Contact extends Component {

  render() {
    return (
      <>
        <Navbar />
        <section className="contact">
          <a href="https://github.com/jayelaguardia" target="_blank"><button title='https://github.com/jayelaguardia'><FontAwesomeIcon icon={faGithubAlt} /></button></a>
          <a href="https://www.linkedin.com/in/jayelaguardia/" target="_blank"><button title='https://www.linkedin.com/in/jayelaguardia/'><FontAwesomeIcon icon={faLinkedinIn} /></button></a>
          <a href="mailto:jayelaguardia@gmail.com" target="_blank"><button title='jayelaguardia@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></button></a>
        </section>
      </>
    );
  }
}