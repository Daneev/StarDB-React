import React, {Component} from 'react';
import './random-planet.css';
import {SwapiService} from '../../services/swapi-service'
import {Spinner} from '../spinner/spinner.js'

export class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true
  };


  async componentDidMount(){
    const id = await this.setId();
    console.log("TCL: RandomPlanet -> componentDidMount -> id", id)
    await this.updatePlanet(id);
  }

  async setId() {
    let id, status;
    for (let index = 0; index < 5; index++) {
      id = Math.floor(Math.random()*27+2);
      console.log("TCL: RandomPlanet -> setId -> id", id);
      status = await this.getImgStatus(id);
      if (status === 200) {
        return id;
      }
    }
  }

  async getImgStatus(id) {
    const url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    const response = await fetch(url);
    return await response.status;
  }

  onError = (err) => {
    console.log("TCL: RandomPlanet -> onError -> 404");
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }


  updatePlanet(id) {
    this.swapi.getPlanetID(id)
    .then(this.onPlanetLoaded)
    .catch(error => console.log("TCL: RandomPlanet -> onError -> ", error.status));
  }






  render(){
    const {planet, loading} = this.state;
    const content = loading ? <Spinner/> : <PlanetView planet = {planet}/> ;

    return (
    <div className="card panel shadow">
      {content}
    </div>
    )
  }
}


const PlanetView = ({planet}) => {
const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
      <div className="card-header p-4">
      <h3 className="text-left mb-0">{name}</h3>
      </div>
        <div className="card-body d-flex"><img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="planet-img" alt=''/>
          <ul className="list-group panel-list">
              <li className="list-group-item"><span>Население :   <strong>{population}</strong></span></li>
              <li className="list-group-item"><span>Период вращения :  <strong>{rotationPeriod}</strong></span></li>
              <li className="list-group-item"><span>Диаметр:  <strong>{diameter}</strong></span></li>
          </ul>
        </div>
    </React.Fragment>
  )
}