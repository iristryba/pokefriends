import React from 'react';
import Types from './Types'

const Card = ({ id, name, sprite, types }) => {
        return (
        <div className="text-center text-xl font-sans rounded-xl border-[6px] border-black bg-white shadow-md shadow-slate-500 ">
            <div className="flex justify-between">
                <p className="ml-2 ">{name.charAt(0).toUpperCase() + name.slice(1)}</p> {/*capitalized name*/}
                <p className="mr-2 text-base ">{id}</p>
            </div>   
            <div className="bg-amber-50 bg-hex-pattern bg-cover shadow-inner shadow-slate-600 mx-5 my-2">
                <img className="sprite" width="144px" alt="robots bg-white" src={`${sprite}`} />
            </div>
            <Types types = {types} id = {id} />
        </div>
    )
}

export default Card;