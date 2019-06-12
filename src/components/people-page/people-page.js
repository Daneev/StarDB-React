import React, {Component} from 'react'
import {ItemList} from '../item-list/item-list'
import {PersonDetails} from '../person-details/person-details'

export class PeoplePage extends Component {
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
    return(
      <React.Fragment>
        <ItemList onItemSelected = {this.onPersonSelected}/>
        <PersonDetails selectPerson = {this.props.selectPerson}/>
      </React.Fragment>
    )
  }
}
