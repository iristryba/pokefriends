import React from 'react';

const Types = ({ id, types }) => {
    const borderColors = {
        "normal": "border-normal",
        "fighting": "border-fighting",
        "flying": "border-flying",
        "poison": "border-poison",
        "ground": "border-ground",
        "rock": "border-rock",
        "bug": "border-bug",
        "ghost": "border-ghost",
        "steel": "border-steel",
        "fire": "border-fire",
        "water": "border-water",
        "grass" : "border-grass",
        "electric": "border-electric",
        "psychic": "border-psychic",
        "ice": "border-ice",
        "dragon": "border-dragon",
        "dark": "border-dark",
        "fairy": "border-fairy",
        "unknown": "border-teal-200",
        "shadow": "border-teal-600",
    }

    return (
        <div className="flex flex-wrap justify-center gap-1 my-3 mx-2">
            {types.map((type) => {
                return (
                    <div 
                        key={id+type.type.name} 
                        className={"type-btn " + (borderColors[type.type.name]??"border-gray-500")}>
                            {type.type.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Types;