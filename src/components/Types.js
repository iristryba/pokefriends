import React from 'react';

const Types = ({ id, types }) => {
    // const typeColors = {
    //     "normal": "bg-stone-300",
    //     "fighting": "bg-red-700",
    //     "flying": "bg-violet-400",
    //     "poison": "bg-purple-700",
    //     "ground": "bg-orange-300",
    //     "rock": "bg-stone-700",
    //     "bug": "bg-lime-400",
    //     "ghost": "bg-indigo-600",
    //     "steel": "bg-slate-500",
    //     "fire": "bg-amber-700",
    //     "water": "bg-blue-500",
    //     "grass" : "bg-green-500",
    //     "electric": "bg-yellow-400",
    //     "psychic": "bg-pink-600",
    //     "ice": "bg-cyan-300",
    //     "dragon": "bg-violet-800",
    //     "dark": "bg-neutral-800",
    //     "fairy": "bg-rose-300",
    //     "unknown": "bg-teal-200",
    //     "shadow": "bg-teal-600",
    // }

    const typeColors = {
        "normal": "bg-[#A8A77A]",
        "fighting": "bg-[#C22E28]",
        "flying": "bg-[#A98FF3]",
        "poison": "bg-[#A33EA1]",
        "ground": "bg-[#E2BF65]",
        "rock": "bg-[#B6A136]",
        "bug": "bg-[#A6B91A]",
        "ghost": "bg-[#735797]",
        "steel": "bg-[#B7B7CE]",
        "fire": "bg-[#EE8130]",
        "water": "bg-[#6390F0]",
        "grass" : "bg-[#7AC74C]",
        "electric": "bg-[#F7D02C]",
        "psychic": "bg-[#F95587]",
        "ice": "bg-[#96D9D6]",
        "dragon": "bg-[#6F35FC]",
        "dark": "bg-[#705746]",
        "fairy": "bg-[#D685AD]",
        "unknown": "bg-teal-200",
        "shadow": "bg-teal-600",
    }

    return (
        <div className="flex justify-center gap-1 my-3 mx-2">
            {types.map((type) => {
                const classNames = "type-btn " + (typeColors[type.type.name]??"bg-gray-500");

                return (
                    <p key={id+type.type.name} className={classNames}>{type.type.name}</p>
                )
            })}
        </div>
    )
}

export default Types;