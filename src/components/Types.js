import React from 'react';

const Types = ({ types }) => {
    // console.log(types);
    return (
        <div className="flex justify-center">
            {types.map((type) => {
                return (
                    <p className="type-btn">{type.type.name}</p>
                )
            })}
        </div>
    )
}

export default Types;