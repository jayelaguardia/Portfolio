import React, { Component } from "react";
import Navbar from '../Components/Navbar'
import resume from '../Components/JLaguardiaResume.PDF'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export default class Resume extends Component {

  render() {
    return (
      <>
        <Navbar />
        <section className="resume">
          {(window.innerWidth < 1024) 
          ? <a href={resume} target="_blank"><button title='JLaguardiaResume.pdf'><FontAwesomeIcon icon={faFilePdf} /></button></a> 
          : <iframe src={resume} height="100%" width="100%"></iframe>}
        </section>
      </>
    );
  }
}