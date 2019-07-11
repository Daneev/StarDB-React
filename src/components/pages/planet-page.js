import React, {Component} from 'react'
import { Row } from './../row/row';
import { ErrorBoundry } from './../error-boundry/error-boundry';
import { PlanetList } from '../sw-components/item-lists';
import PlanetDetails from '../sw-components/planet-details';


export class PlanetPage extends Component {
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
          left = {<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    )
  }
}
