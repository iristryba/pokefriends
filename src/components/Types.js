import React from 'react';

const Types = ({ id, types }) => {

    const typeColors = {
        "normal": "border-[#A8A77A]",
        "fighting": "border-[#C22E28]",
        "flying": "border-[#A98FF3]",
        "poison": "border-[#A33EA1]",
        "ground": "border-[#E2BF65]",
        "rock": "border-[#B6A136]",
        "bug": "border-[#A6B91A]",
        "ghost": "border-[#735797]",
        "steel": "border-[#B7B7CE]",
        "fire": "border-[#EE8130]",
        "water": "border-[#6390F0]",
        "grass" : "border-[#7AC74C]",
        "electric": "border-[#F7D02C]",
        "psychic": "border-[#F95587]",
        "ice": "border-[#96D9D6]",
        "dragon": "border-[#6F35FC]",
        "dark": "border-[#705746]",
        "fairy": "border-[#D685AD]",
        "unknown": "border-teal-200",
        "shadow": "border-teal-600",
    }

    return (
        <div className="flex justify-center gap-1 my-3 mx-2">
            {types.map((type) => {
                const classNames = "type-btn " + (typeColors[type.type.name]??"border-gray-500");
                console.log(classNames);

                return (
                    <div key={id+type.type.name} className={classNames}>{type.type.name}</div>
                )
            })}
        </div>
    )
}

export default Types;