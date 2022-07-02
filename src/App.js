import React, { Component } from 'react';
import TitleImage from './components/TitleImage';
import SeachBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css';
import { Pokedex } from 'pokeapi-js-wrapper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      generation: 1,
      searchfield: '',
    };
  }
  
  componentDidMount() {
    const pokedex = new Pokedex();
    const ids = [...Array(151).keys()].map(i => i + 1);

    pokedex.getPokemonByName(ids)
    .then(pokemons => this.setState({ pokemons: pokemons}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { pokemons, searchfield } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!pokemons.length) {
      return <h1>Loading</h1>
    } else {
        return (
          <div className="flex flex-col items-center  ">
            <TitleImage />
            <SeachBox searchChange={ this.onSearchChange } />
            <CardList pokemons = {filteredPokemons}/>
          </div>
        );
    }
    
  }
  
}

export default App;