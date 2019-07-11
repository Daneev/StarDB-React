import React from 'react';
import {ItemDetails, Records} from '../item-details/item-details';
import { withSwapi } from '../hoc/withSwapi';

const PersonDetails = (props) => {

  return (
    <ItemDetails {...props}  >
        <Records field="gender" label="пол: " />
        <Records field="birthYear" label="день рождения: " />
        <Records field="height" label="рост: " />
        <Records field="mass" label="вес: " />
        <Records field="skinColor" label="цвет кожи: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPersonID,
    getImageURL: swapi.getPersonImage
  }
}

export default  withSwapi(mapMethodsToProps)(PersonDetails);
