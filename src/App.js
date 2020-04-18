import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import Resume from './Routes/Resume'
import Contact from './Routes/Contact'
import './App.css'
class App extends Component {
  render() {
    return (
      <main className="app">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/projects"} component={Projects} />
          <Route exact path={"/resume"} component={Resume} />
          <Route exact path={"/contact"} component={Contact} />
        </Switch>
      </main>
    );
  }
}
export default App;
