import React, { Component } from "react";
import Navbar from '../Components/Navbar'
import Weebify1 from '../Images/Weebify1.JPG'
import Weebify2 from '../Images/Weebify2.JPG'
import Bobapedia1 from '../Images/Bobapedia1.JPG'
import Bobapedia2 from '../Images/Bobapedia2.JPG'
import QuizApp1 from '../Images/QuizApp1.JPG'
import QuizApp2 from '../Images/QuizApp2.JPG'
import ScreenStart from '../Images/ScreenStart.JPG'
import ScreenGame from '../Images/ScreenGame.JPG'

export default class Projects extends Component {

  state={
    renderTechQuaran: false,
    renderTechWeeb: false,
    renderTechBoba: false,
    renderTechQuiz: false,
    renderScreenQuaran: false,
    renderScreenWeeb: false,
    renderScreenBoba: false,
    renderScreenQuiz: false,
  }

  toggleBool = (button, name) => {
    const key = `render${button}${name}`
    this.setState({
      [key]: !this.state[key],
    })
  }

  render() {
    const {
      renderTechQuaran,
      renderTechWeeb,
      renderTechBoba,
      renderTechQuiz,
      renderScreenQuaran,
      renderScreenWeeb,
      renderScreenBoba,
      renderScreenQuiz,
    } = this.state
    return (
      <>
        <Navbar />
        <section className="projects">
          <div className='quarantrail'>
            <h2>QuaranTrail</h2>
            <p>In this playful and lighthearted game, the world was struck with an awful pandemic and the player has to stay indoors. The goal is to practice social distancing and self quarantine while keeping one's boredom level bar low for as many days as possible. As such, the two guages to keep an eye on are the chance of infection and boredom. Every choice and action can increase or decrease these guages so tread carefully. The player must also need to keep track of, and maintain, their supply of food and toilet paper, but you may not want to get too much...</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Tech', 'Quaran')}>Tech Stack</button>
              <button onClick={() => this.toggleBool('Screen', 'Quaran')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/Quarantrail-client" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://quarantrail.now.sh/" target="_blank"><button>Live App</button></a>
            </div>
            {renderTechQuaran ? 
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React-Game-Engine</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Mocha/Chai</li>
              <li>Heroku</li>
            </ul> 
            : null}
            {renderScreenQuaran ? 
            <>
              <img src={ScreenStart} alt='a screenshot from the QuaranTrail game' /> 
              <img src={ScreenGame} alt='a screenshot from the QuaranTrail game' /> 
            </>
            : null}
          </div>

          <div className='weebify'>
            <h2>Weebify</h2>
            <p>The user can learn Japanese vocabulary using spaced repetition learning technique. A user is presented with a vocabulary "card" and is allowed to enter a guess. If the guess is correct, the user will be quizzed on that word later. If the guess is incorrect, they will be quizzed sooner.</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Tech', 'Weeb')}>Tech Stack</button>
              <button onClick={() => this.toggleBool('Screen', 'Weeb')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/Cap-2-Client-Jaye-Blade" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://weebify.bladeboles.now.sh" target="_blank"><button>Live App</button></a>
            </div>
            {renderTechWeeb ? 
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Zeit</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
            </ul> 
            : null}
            {renderScreenWeeb ?
            <>
              <img src={Weebify1} alt='a screenshot from the Weebify app' /> 
              <img src={Weebify2} alt='a screenshot from the Weebify app' /> 
            </> 
            : null}
          </div>

          <div className='bobapedia'>
            <h2>Bobapedia</h2>
            <p>Bobapedia is a collection of bubble (or boba) tea recipes. The Classic page is where you'll find the "top" 15 bubble teas. Clicking on one will direct you to the recipe to make that tea. The Creation page is where you can make your own tea recipe as well as view other teas made by other users. You can also update or delete the teas you have made. However, you must have an account to view or use this page. Please use the register tab to make an account or login if you've already made one.</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Tech', 'Boba')}>Tech Stack</button>
              <button onClick={() => this.toggleBool('Screen', 'Boba')}>Screenshots</button>
              <a href="https://github.com/jayelaguardia/bobapedia-client" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://bobapedia-client.now.sh/" target="_blank"><button>Live App</button></a>
            </div>
            {renderTechBoba ? 
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Zeit</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
            </ul> 
            : null}
            {renderScreenBoba ?
            <>
              <img src={Bobapedia1} alt='a screenshot from the Bobapedia app' /> 
              <img src={Bobapedia2} alt='a screenshot from the Bobapedia app' /> 
            </> 
            : null}
          </div>

          <div className='quizapp'>
            <h2>Quiz App</h2>
            <p>A user is able to take a short quiz about the Kardashian celebrities and receive feedback.</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Tech', 'Quiz')}>Tech Stack</button>
              <button onClick={() => this.toggleBool('Screen', 'Quiz')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/quizAppJayeBrittany" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://thinkful-ei-jaguar.github.io/quizAppJayeBrittany/" target="_blank"><button>Live App</button></a>
            </div>
            {renderTechQuiz ? 
            <ul>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul> 
            : null}
            {renderScreenQuiz ?
            <>
              <img src={QuizApp1} alt='a screenshot from the Quiz App' /> 
              <img src={QuizApp2} alt='a screenshot from the Quiz App' /> 
            </> 
            : null}
          </div>
        </section>
      </>
    );
  }
}