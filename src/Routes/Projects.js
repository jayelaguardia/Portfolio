import React, { Component } from "react";
import Navbar from '../Components/Navbar'
import Weebify1 from '../Images/Weebify1.JPG'
import Weebify2 from '../Images/Weebify2.JPG'
import Weebify3 from '../Images/Weebify3.JPG'
import Bobapedia1 from '../Images/Bobapedia1.JPG'
import Bobapedia2 from '../Images/Bobapedia2.JPG'
import Bobapedia3 from '../Images/Bobapedia3.JPG'
import QuizApp1 from '../Images/QuizApp1.JPG'
import QuizApp2 from '../Images/QuizApp2.JPG'
import QuizApp3 from '../Images/QuizApp3.JPG'
import ScreenStart from '../Images/ScreenStart.JPG'
import ScreenGame from '../Images/ScreenGame.JPG'
import ScreenMarket from '../Images/ScreenMarket.JPG'

export default class Projects extends Component {

  state={
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
            <img className='previewIMG' src={ScreenStart} alt='a screenshot from the QuaranTrail game' /> 
            <h3>Description</h3>
            <p>This is a game where the user practices social distancing and self quarantine practices. It is geared towards teens and older. We built this game for the user to have fun and alleviate boredom</p>
            <p>In this playful and lighthearted game, the world was struck with an awful pandemic and the player has to stay indoors. The goal is to practice social distancing and self quarantine while keeping one's boredom level bar low for as many days as possible. As such, the two guages to keep an eye on are the chance of infection and boredom. Every choice and action can increase or decrease these guages so tread carefully. The player must also need to keep track of, and maintain, their supply of food and toilet paper, but you may not want to get too much...</p>
            <h3>Tech Stack</h3>
            <p>React, JavaScript, HTML5, CSS3, React-Game-Engine, Zeit, Express, Node.js, PostgreSQL, Heroku</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Screen', 'Quaran')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/Quarantrail-client" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://quarantrail.now.sh/" target="_blank"><button>Live App</button></a>
            </div>
            {renderScreenQuaran ? 
            <>
              <img src={ScreenGame} alt='a screenshot from the QuaranTrail game' /> 
              <img src={ScreenMarket} alt='a screenshot from the QuaranTrail game' /> 
            </>
            : null}
          </div>

          <div className='weebify'>
            <h2>Weebify</h2>
            <img className='previewIMG' src={Weebify1} alt='a screenshot from the Weebify app' /> 
            <h3>Description</h3>
            <p>This is a flashcard memory type of app. We built this app to help beginners learn japanese and it is geared towards anyone who wishes to learn a new language</p>
            <p>The user can learn Japanese vocabulary using spaced repetition learning technique. A user is presented with a vocabulary "card" and is allowed to enter a guess. If the guess is correct, the user will be quizzed on that word later. If the guess is incorrect, they will be quizzed sooner.</p>
            <h3>Tech Stack</h3>
            <p>React, JavaScript, HTML5, CSS3, Zeit, Express, Node.js, PostgreSQL, Heroku</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Screen', 'Weeb')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/Cap-2-Client-Jaye-Blade" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://weebify.bladeboles.now.sh" target="_blank"><button>Live App</button></a>
            </div>
            {renderScreenWeeb ?
            <>
              <img src={Weebify2} alt='a screenshot from the Weebify app' /> 
              <img src={Weebify3} alt='a screenshot from the Weebify app' /> 
            </> 
            : null}
          </div>

          <div className='bobapedia'>
            <h2>Bobapedia</h2>
            <img className='previewIMG' src={Bobapedia1} alt='a screenshot from the Bobapedia app' />
            <h3>Description</h3>
            <p>This app is a hub to create and view boba recipes. I built this app for boba lovers to save their favorite boba tea recipes as well as look at other recipes to try on their next boba adventure</p>
            <p>Bobapedia is a collection of bubble (or boba) tea recipes. The Classic page is where you'll find the "top" 15 bubble teas. Clicking on one will direct you to the recipe to make that tea. The Creation page is where you can make your own tea recipe as well as view other teas made by other users. You can also update or delete the teas you have made. However, you must have an account to view or use this page. Please use the register tab to make an account or login if you've already made one.</p>
            <h3>Tech Stack</h3>
            <p>React, JavaScript, HTML5, CSS3, Zeit, Express, Node.js, PostgreSQL, Heroku</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Screen', 'Boba')}>Screenshots</button>
              <a href="https://github.com/jayelaguardia/bobapedia-client" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://bobapedia-client.now.sh/" target="_blank"><button>Live App</button></a>
            </div>
            {renderScreenBoba ?
            <>
              <img src={Bobapedia2} alt='a screenshot from the Bobapedia app' /> 
              <img src={Bobapedia3} alt='a screenshot from the Bobapedia app' /> 
            </> 
            : null}
          </div>

          <div className='quizapp'>
            <h2>Quiz App</h2>
            <img className='previewIMG' src={QuizApp1} alt='a screenshot from the Quiz App' />
            <h3>Description</h3>
            <p>Much like the name, this is a quiz app. This app was built for those who would like to test their knowledge on the Kardashian celebrities. This app was built as a way to learn and become proficient at JavaScript, HTML5, CSS3</p>
            <p>A user is able to take a short quiz about the Kardashian celebrities. The user receives feedback immediately after each question. The user is then presented with a final score and how well they did at the end of the quiz</p>
            <h3>Tech Stack</h3>
            <p>JavaScript, HTML5, CSS3</p>
            <div className='projectButts'>
              <button onClick={() => this.toggleBool('Screen', 'Quiz')}>Screenshots</button>
              <a href="https://github.com/thinkful-ei-jaguar/quizAppJayeBrittany" target="_blank"><button>GitHub Repo</button></a>
              <a href="https://thinkful-ei-jaguar.github.io/quizAppJayeBrittany/" target="_blank"><button>Live App</button></a>
            </div>
            {renderScreenQuiz ?
            <>
              <img src={QuizApp2} alt='a screenshot from the Quiz App' /> 
              <img src={QuizApp3} alt='a screenshot from the Quiz App' /> 
            </> 
            : null}
          </div>
        </section>
      </>
    );
  }
}