import React, { Component } from 'react';
import './item-details.css';
import { Spinner } from '../spinner/spinner';

export const Records = ({ item, field, label }) => {

  return <li className="list-group-item"><span>{label}{item[field]}</span></li>
}



export class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageURL } = this.props;
    console.log("TCL: PersonDetails -> updatePerson -> id", itemId)
    if (!itemId) { return; };

    getData(itemId)
      .then((item) => {
        console.log("TCL: PersonDetails -> updatePerson -> person", item);
        this.setState({
          item,
          image: getImageURL(item)
        })
      })
  }


  render() {
    const { item, image } = this.state;
    if (!item) {
      return <Spinner />;
    }
    const { name } = item;
    return (
      <div className="card person shadow">
        <h4 className="card-title m-2">{name}</h4>
        <div className="card-body d-flex justify-content-around"><img src={image} className="person-img" alt='' />
        </div>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    )
  }
}