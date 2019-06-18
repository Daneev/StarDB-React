import React, {Component} from 'react';
import './item-list.css';
import { SwapiService } from './../../services/swapi-service';
import { Spinner } from '../spinner/spinner';

export class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {

    const {getData} = this.props;

    getData()
    .then((itemList) =>
      this.setState({ itemList }));
  }

  renderItems(arr){
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
     return (<li className="list-group-item"
            key={id}
            onClick = {() => this.props.onItemSelected(id)} ><span>
            {label}
            </span></li>)})
  }



  render() {
    const {itemList: peopleList} = this.state;
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