import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';
import { Pokedex } from 'pokeapi-js-wrapper';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';


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
    const ids = [...Array(30).keys()].map(i => i + 1);

    pokedex.getPokemonByName(ids)
    .then(pokemons => this.setState({ pokemons: pokemons}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { pokemons, searchfield } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return (
        (pokemon.name.toLowerCase().includes(searchfield.toLowerCase()))
        || (pokemon.id.toString().includes(searchfield))
      );
    })

    if (!pokemons.length) {
      return (
        <LoadingScreen />
      )
    } else {
        return (
          <div>
            <Header searchChange={ this.onSearchChange }/>
            <CardList pokemons = {filteredPokemons}/>
          </div>
        );
    }
    
  }
  
}

export default App;