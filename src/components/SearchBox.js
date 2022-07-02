import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-2'>
            <input 
                className='pb-2 pt-1 px-2 text-black font-medium border-4 rounded-xl border-black'
                type='search' 
                placeholder='search pokemon'
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;