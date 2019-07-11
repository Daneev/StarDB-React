import React from 'react';
import { SwapiService } from '../../services/swapi-service';
import { withData }  from '../hoc/with-data'
import ItemList from '../item-list/item-list'
import { withChildFunction } from '../hoc/withChildFunction';

const swapi = new SwapiService();

const{
  getPioplesAll,
  getPlanetsAll,
  getStarshipsAll
} = swapi;

const renderName = ({ name }) => <span>{name}</span>;
const PersonList = withData(getPioplesAll)(withChildFunction(renderName)(ItemList));
const PlanetList = withData(getPlanetsAll)(withChildFunction(renderName)(ItemList));
const StarshipList = withData(getStarshipsAll)(withChildFunction(renderName)(ItemList));

export {
  PersonList,
  PlanetList,
  StarshipList
};