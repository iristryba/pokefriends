import React from 'react';
import Types from './Types'

const Card = ({ id, name, sprite, types }) => {
        return (
        <div className="text-center text-xl rounded-md border-4 border-black bg-blue-400">
            <div className="flex justify-between">
                <p className="mx-1 ">{name.charAt(0).toUpperCase() + name.slice(1)}</p> {/*capitalized name*/}
                <p className="mx-1 ">{id}</p>
            </div>   
            <div className="bg-amber-50 bg-hex-pattern bg-cover shadow-inner shadow-slate-600 mx-5 my-2">
                <img className="sprite" width="144px" alt="robots bg-white" src={`${sprite}`} />
            </div>
            <Types types = {types} id = {id} />
        </div>
    )
}

export default Card;