import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-2'>
            <input 
                className='w-60 pb-2 pt-1 px-2 text-center text-black font-medium border-4 rounded-xl border-black'
                type='search' 
                placeholder='search pokemon by name or id'
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;