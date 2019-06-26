import React, {Component} from 'react';
import './App.css'
import {Header} from '../header/header'
import {RandomPlanet} from '../random-planet/random-planet'
import {PeoplePage} from '../people-page/people-page'
import { SwapiService } from './../../services/swapi-service';

export class App extends Component {
  swapi = new SwapiService();

  state = {
    selectItemID: 5
  }

  onItemSelected = (id)=>{
  console.log("TCL: App -> onPersonSelected -> id", id)

    this.setState({
      selectItemID: id
    })
  }


  render(){
  return (
    <div>
      <Header/>
      <RandomPlanet/>
        <div className="d-flex justify-content-between panel-bottom">
          <PeoplePage
          onItemSelected = {this.onItemSelected}
          selectItemID = {this.state.selectItemID}/>
        </div>
    </div>
  )}
}