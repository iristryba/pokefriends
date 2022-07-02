import React from 'react';
import pokeballImage from '../assets/pokeball.jpg' 


const LoadingScreen = () => {
    return(
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="p-4 text-3xl">Loading...</h1>
            <img className="loadImage w-40" src={ pokeballImage } alt="rotating pokeball" />
        </div>
    );
}

export default LoadingScreen;