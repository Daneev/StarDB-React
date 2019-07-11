import React, {Component} from 'react'
import { Row } from './../row/row';
import { ErrorBoundry } from './../error-boundry/error-boundry';
import { StarshipList } from '../sw-components/item-lists';
import StarshipDetails from '../sw-components/starship-dtails';


export class StarshipPage extends Component {
  state = {
    itemId: 5
  }

  onItemSelected = (id) => {
    console.log("TCL: App -> onPersonSelected -> id", id)

    this.setState({
      itemId: id
    })
  }

  render(){
    return(
      <ErrorBoundry>
        <Row
          left = {<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StarshipDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    )
  }
}
