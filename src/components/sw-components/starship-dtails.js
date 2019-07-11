import React from 'react';
import {ItemDetails, Records} from '../item-details/item-details';
import { withSwapi } from '../hoc/withSwapi';

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props}  >
        <Records field="model" label="модель: " />
        <Records field="length" label="длина: " />
        <Records field="costInCredits" label="цена: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarshipID,
    getImageURL: swapi.getStarshipImage
  }
}

export default  withSwapi(mapMethodsToProps)(StarshipDetails);