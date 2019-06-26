import React, {Component} from 'react'
import {ItemList} from '../item-list/item-list'
import {ItemDetails, Records} from '../item-details/item-details'
import { SwapiService } from './../../services/swapi-service';
import { Row } from './../row/row';
import { ErrorBoundry } from './../error-boundry/error-boundry';




export class PeoplePage extends Component {
  swapi = new SwapiService();

  onItemSelected = (id) => {
    console.log("TCL: PeoplePage -> onItemSelected -> id", id)
    this.props.onItemSelected(id);
  };

  render(){
  const itemList = (<ItemList
    onItemSelected = {this.onItemSelected}
    getData = {this.swapi.getPioplesAll}>
    {(i) => `${i.name} - ${i.birthYear}`}
    </ItemList>
  )
  const itemDetails = (
    <ErrorBoundry>
      <ItemDetails
        selectItemID={this.props.selectItemID}
        getData={this.swapi.getPersonID}
        getImageURL={this.swapi.getPersonImage}>
        < Records field="gender" label="пол: " />
        < Records field="birthYear" label="день рождения: " />
        < Records field="height" label="рост: " />
        < Records field="mass" label="вес: " />
        < Records field="skinColor" label="цвет кожи: " />
      </ItemDetails>
    </ErrorBoundry>
  )

    return(
      <ErrorBoundry>
        <Row left = {itemList} right = {itemDetails} />
      </ErrorBoundry>
    )
  }
}
