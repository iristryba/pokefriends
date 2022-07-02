import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
    // code for testing Error handling
    // if (true) {
    //     throw new Error ('Noooooo');
    // }
    console.log(pokemons[0]);
    return (
        <div className="flex flex-grow flex-wrap justify-center gap-4 pt-2 px-4">
            {pokemons.map((pokemon) => {
                return (
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        sprite={pokemon.sprites.front_default}
                        types={pokemon.types}
                    />);
                }
            )}
        </div>
    )
}
    
export default CardList;