import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <section className='navbar'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
        <Link to="/resume"><button>Resume</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </section>
    );
  }
}
