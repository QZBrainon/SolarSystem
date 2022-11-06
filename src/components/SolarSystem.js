import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" id="solar">
        <Title headline="Planetas" />
        <div id="planetCardsContainer">
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
