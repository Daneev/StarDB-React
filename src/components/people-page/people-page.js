import React, {Component} from 'react'
import {ItemList} from '../item-list/item-list'
import {PersonDetails} from '../person-details/person-details'
import { SwapiService } from './../../services/swapi-service';
import { Row } from './../row/row';

export class PeoplePage extends Component {
  swapi = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, info){
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (selectedPerson) => {
    this.props.onItemSelected(selectedPerson);
  };

  render(){
    if (this.state.hasError) {
      return <span>error</span>;
    }

  const itemList = (<ItemList
    onItemSelected = {this.onPersonSelected}
    getData = {this.swapi.getPioplesAll}
    renderItem = {({name, birthYear}) => `${name} - ${birthYear}`}
    />
  )
  const personDetails = (<PersonDetails selectPerson={this.props.selectPerson} />)

    return(
      <Row left = {itemList} right = {personDetails} />
    )
  }
}
