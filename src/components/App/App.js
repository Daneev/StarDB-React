import React from 'react';
import './App.css'
import {Header} from '../header/header'
import {RandomPlanet} from '../random-planet/random-planet'
import {PeoplePage} from '../pages/people-page'
import { PlanetPage } from '../pages/planet-page'
import { StarshipPage } from '../pages/starship-page'
import { ErrorBoundry } from './../error-boundry/error-boundry';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



export const App = () => {
  return (
    <ErrorBoundry>
      <Router>
        <div>
          <Header/>
          <RandomPlanet/>
            <div className="d-flex flex-wrap justify-content-between panel-bottom">
              <Route path="/people" component = {PeoplePage}/>
              <Route path="/planets" component={PlanetPage}/>
              <Route path="/starships" component={StarshipPage}/>
            </div>
        </div>
      </Router>
    </ErrorBoundry>
  )
}