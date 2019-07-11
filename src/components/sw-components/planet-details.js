import React from 'react';
import {ItemDetails, Records} from '../item-details/item-details';
import { withSwapi } from '../hoc/withSwapi';

const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props}  >
        <Records field="population" label="население: " />
        <Records field="rotationPeriod" label="период: " />
        <Records field="diameter" label="диаметр: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanetID,
    getImageURL: swapi.getPlanetImage
  }
}

export default  withSwapi(mapMethodsToProps)(PlanetDetails);