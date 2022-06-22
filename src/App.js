import React, { Component } from 'react';
import TitleImage from './components/TitleImage';
import FilterBar from './components/FilterBar';
import SeachBox from './components/SearchBox';
// import Scroll from './components/Scroll';
import CardList from './components/CardList';
import './App.css';
import { Pokedex } from 'pokeapi-js-wrapper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }
  
  componentDidMount() {
    const pokedex = new Pokedex();
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    // const ids = [...Array(5).keys()];

    pokedex.getPokemonByName(ids)
    .then(pokemons => this.setState({ pokemons: pokemons}))
  }

  render() {
    const { pokemons } = this.state;

    if (!pokemons.length) {
      return <h1>Loading</h1>
    } else {
        return (
          <div className="flex flex-col items-center">
            <TitleImage />
            <FilterBar />
            <SeachBox />
            <CardList pokemons = {pokemons}/>
          </div>
        );
    }
    
  }
  
}

export default App;