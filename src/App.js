import React, { Component } from 'react';
import TitleImage from './components/TitleImage';
import FilterBar from './components/FilterBar';
import SeachBox from './components/SearchBox';
// import Scroll from './components/Scroll';
import CardList from './components/CardList';
import Footer from './components/Footer';
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
    // const ids = [1, 2, 3];
    const ids = [...Array(20).keys()].map(i => i + 152);

    pokedex.getPokemonByName(ids)
    .then(pokemons => this.setState({ pokemons: pokemons}))
  }

  render() {
    const { pokemons } = this.state;

    if (!pokemons.length) {
      return <h1>Loading</h1>
    } else {
        return (
          <div className="flex flex-col items-center bg-cute-blue-pokemon bg-repeat h-max">
            <TitleImage />
            <FilterBar />
            <SeachBox />
            <CardList pokemons = {pokemons}/>
            <Footer />
          </div>
        );
    }
    
  }
  
}

export default App;