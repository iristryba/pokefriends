import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pb-2'>
            <input 
                type='search' 
                placeholder='search by name or id'
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;