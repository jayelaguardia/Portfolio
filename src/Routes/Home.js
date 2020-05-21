import React, { Component } from "react";
import Navbar from '../Components/Navbar'
import JLphoto from '../Images/JLphoto.jpg'

export default class Home extends Component {

  render() {
    return (
      <>
        <Navbar />
        <section className="home">
          <img className='selfie' src={JLphoto} alt='a photo of Jaye Anne Laguardia' /> 
          <h1>Hi! My name is <span className='name'> Jaye Anne Laguardia </span></h1>
          <h2>I am a Full Stack Developer with a passion for video games, music, and yarn.</h2>

          <p> I am a graduate from Thinkful's Full Engineering Immersion Program and a graduate from Cal Poly Pomona with a B.S. in Computer Science. I would love a career as a full stack developer working with video games or music. I love the mental stimulation and learning that comes with coding, especially the feeling of joy each time I overcome an obstacle. I also really enjoy being a part of the creation process of a project from start to finish. It's like, "I made that! With my own hands!" and I fill up with pride and confidence in my work. </p>

          <p> When I'm not coding, I like to relax with yarn or video games. The repetitive motions of crocheting is very soothing and like earlier, creating stuff is my jam. It is similar to the same joy I have when I finish a coding project. Monster Hunter is the current game I've been addicted to and what I like most about it is I get to jam with my friends and bond with them. Years later and we're still going strong with this game. That's the kind of games I'd like to help create in the future; games to create fun memories to treasure with your friends. </p>
        </section>
      </>
    );
  }
}
