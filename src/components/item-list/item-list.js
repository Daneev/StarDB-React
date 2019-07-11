import React from 'react';
import './item-list.css';


const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (<li className="list-group-item"
              key={id}
              onClick = {() => onItemSelected(id)} ><span>
              {label}
              </span></li>)})

    return (
    <ul className="list-group list-item  shadow">
      {items}
    </ul>
    )
};


export default ItemList;
