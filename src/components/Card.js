import React from 'react';

const Card = ( {id, name, sprite}) => {
    
    return (
        <div className="text-center bg-blue-400">
            <img alt="robots" src={`${sprite}`} />
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default Card;