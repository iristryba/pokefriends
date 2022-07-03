import React, { Component } from 'react';
import TitleImage from './components/TitleImage';
import SeachBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css';
import { Pokedex } from 'pokeapi-js-wrapper';
import LoadingScreen from './components/LoadingScreen';


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
          <div className="flex flex-row">
            <header className="fixed h-48 w-screen flex flex-col justify-center items-center z-50 bg-cute-blue-pokemon bg-repeat border-b-2 border-solid border-white" >
              <TitleImage />
              <SeachBox searchChange={ this.onSearchChange } />
            </header>
            <CardList pokemons = {filteredPokemons}/>
          </div>
        );
    }
    
  }
  
}

export default App;