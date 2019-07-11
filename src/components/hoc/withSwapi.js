import React from 'react';
import { SwapiService } from '../../services/swapi-service';
export const withSwapi = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    const swapi = new SwapiService();
    const serviceProps = mapMethodsToProps(swapi);
    return (<Wrapped {...props} {...serviceProps} />);
  };
};
