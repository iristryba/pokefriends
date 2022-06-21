import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
    // code for testing Error handling
    // if (true) {
    //     throw new Error ('Noooooo');
    // }
    
    return (
        <div className="flex flex-wrap gap-1">
            {pokemons.map((pokemon) => {
                return (
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        sprite={pokemon.sprites.front_default}
                    />);
                }
            )}
        </div>
    )
}
    
export default CardList;