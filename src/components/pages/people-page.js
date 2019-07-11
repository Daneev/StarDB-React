import React, {Component} from 'react'
import { Row } from './../row/row';
import { ErrorBoundry } from './../error-boundry/error-boundry';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';


export class PeoplePage extends Component {
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
          left = {<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    )
  }
}
