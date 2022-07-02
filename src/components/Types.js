import React from 'react';

const Types = ({ id, types }) => {
    const borderColors = (type) => "border-" + type;

    return (
        <div className="flex flex-wrap justify-center gap-1 my-3 mx-2">
            {types.map((type) => {
                return (
                    <div 
                        key={id+type.type.name} 
                        className={"type-btn " + (borderColors(type.type.name)??"border-gray-500")}>
                            {type.type.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Types;