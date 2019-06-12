import React, {Component} from 'react';
import './item-list.css';
import { SwapiService } from './../../services/swapi-service';
import { Spinner } from '../spinner/spinner';

export class ItemList extends Component {
  swapi = new SwapiService()

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapi.getPioplesAll()
    .then((peopleList) =>
      this.setState({ peopleList }));
  }

  renderItems(arr){
    return arr.map(({id, name}) =>
   {return (<li className="list-group-item"
            key={id}
            onClick = {() => this.props.onItemSelected(id)} ><span>
            {name}
            </span></li>)})
  }



  render() {
    const {peopleList} = this.state;
    if (!peopleList) {
      return <Spinner/>;
    }
    const items = this.renderItems(peopleList);
    return (
    <ul className="list-group list-item  shadow">
      {items}
  </ul>
  )}
}