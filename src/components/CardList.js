import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
    // code for testing Error handling
    // if (true) {
    //     throw new Error ('Noooooo');
    // }
    
    return (
        <main className="flex flex-col">
            <div className="h-48 w-screen z-40 "></div>
            <div className="flex flex-wrap justify-center gap-4 pt-2 px-4">
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
        </main>
    )
}
    
export default CardList;