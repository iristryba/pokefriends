import React from 'react';
import Types from './Types'

const Card = ( {id, name, sprite, weight, types}) => {
    
    return (
        <div className="text-center rounded-md border-4 border-black bg-blue-400">
            <div className="flex justify-between">
                <p className="mx-1">{id}</p>
                <p className="mx-1">{name}</p>
            </div>   
            <div className="bg-white mx-5 my-2">
                <img className="sprite" alt="robots bg-white" src={`${sprite}`} />
            </div>
            <Types types = {types} />
            <p>{weight} pounds</p>
        </div>
    )
}

export default Card;