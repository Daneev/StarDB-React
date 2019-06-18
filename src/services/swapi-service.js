export class SwapiService {
  baseURL = `https://swapi.co/api/`

  getResourse = async (url) => {
    const response = await fetch(this.baseURL+url);
      if (!response.ok) {
        throw new Error(`Url: ${this.baseURL+url} not corrected`)
      }
    return await response.json();
  }

   getPioplesAll = async () => {
    const res = await this.getResourse(`people/`);
    return res.results.map(this._transformPerson);
   }

   getPersonID = async (id) => {
    const person = await this.getResourse(`people/${id}/`);
    return this._transformPerson(person);
  }

   getPlanetsAll = async () => {
    const res = await this.getResourse(`planets/`);
    return res.results.map(this._transformPlanet);
  }

   getPlanetID = async (id) => {
    const planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

   getStarshipsAll = async () => {
    const res = await this.getResourse(`starships/`);
    // return res.results;
    return res.results.map(this._transformStarship);
  }

   getStarshipID = async (id) => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractID = (item) => {
    const regExp = /\/([0-9]+)\/$/;
    const id = item.url.match(regExp)[1];
    return id;
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }
  _transformStarship = (starship) => {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
  _transformPerson = (person) => {
    return {
      id: this._extractID(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      skinColor: person.skin_color,
      gender: person.gender,
      birthYear: person.birth_year
    }
  }

}

// const swapi = new SwapiService();
// swapi.getStarshipsAll().then((body)=>{
//   console.log("TCL: body", body)
// })
// swapi.getPioplesAll().then((body)=>{
//   console.log("TCL: body", body)
// })
// swapi.getPersonID(3).then((body)=>{
//   console.log("TCL: Person", body)
// })
// swapi.getPlanetID(3).then((body)=>{
//   console.log("TCL: Planet", body)
// })
// swapi.getStarshipID(3).then((body)=>{
//   console.log("TCL: Starship", body)
// })

// swapi.getStarshipsAll().then((body) => {
//   body.map(item => console.log("TCL: body.name", item.name))

// })


