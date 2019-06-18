import React, {Component} from 'react';
import './App.css'
import {Header} from '../header/header'
import {RandomPlanet} from '../random-planet/random-planet'
import {ItemList} from '../item-list/item-list'
import {PersonDetails} from '../person-details/person-details'
import {PeoplePage} from '../people-page/people-page'
import { SwapiService } from './../../services/swapi-service';

export class App extends Component {
  swapi = new SwapiService();

  state = {
    selectPerson: 1
  }

  onPersonSelected = (id)=>{
  console.log("TCL: App -> onPersonSelected -> id", id)

    this.setState({
      selectPerson: id
    })
  }


  render(){
  return (
    <div>
      <Header/>
      <RandomPlanet/>
        <div className="d-flex justify-content-between panel-bottom">
          <PeoplePage
          onItemSelected = {this.onPersonSelected}
          selectPerson = {this.state.selectPerson}/>
          {/* <ItemList onItemSelected = {this.onPersonSelected}/> */}
          {/* <PersonDetails selectPerson = {this.state.selectPerson}/> */}
        </div>
    </div>
  )}
}