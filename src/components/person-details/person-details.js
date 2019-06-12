import React, {Component} from 'react';
import './person-details.css';
import { SwapiService } from './../../services/swapi-service';
import { Spinner } from '../spinner/spinner';

export class PersonDetails extends Component {
  swapi = new SwapiService()

  state = {
    person: null
  }

 componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectPerson !==prevProps.selectPerson){
      this.updatePerson()
    }
  }

  updatePerson(){
    const {selectPerson} = this.props;
    console.log("TCL: PersonDetails -> updatePerson -> id", selectPerson)
    if (!selectPerson) {return;};
    this.swapi.getPersonID(selectPerson)
    .then((person) =>{
    console.log("TCL: PersonDetails -> updatePerson -> person", person);
    this.setState({person})})
  }


  render(){
    if (!this.state.person) {
      return <Spinner/>;
    }
    const {id, name, gender, birthYear, height, mass, skinColor} = this.state.person;
    return (
      <div className="card person shadow">
          <h4 className="card-title m-2">{name}</h4>
      <div className="card-body d-flex justify-content-around"><img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="person-img" alt=''/>
      </div>
      <ul className="list-group list-group-flush">
          <li className="list-group-item"><span>пол: {gender}</span></li>
          <li className="list-group-item"><span>день рождения: {birthYear}</span></li>
          <li className="list-group-item"><span>рост: {height}</span></li>
          <li className="list-group-item"><span>вес: {mass}</span></li>
          <li className="list-group-item"><span>цвет кожи: {skinColor}</span></li>
      </ul>
    </div>
    )}
}