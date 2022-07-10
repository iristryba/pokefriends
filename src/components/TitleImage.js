import React from 'react';

const TitleImage = ({isShrunk}) => {
    return (
        <div className={`max-w-md m-2 ${isShrunk ? "w-28" : "w-3/5"}`}>
            <img src="https://fontmeme.com/permalink/220621/20c0bc187670ab6f68d281c3f55eadc4.png" alt="PokeFriends" border="0"></img>
        </div> 
    )
}

export default TitleImage;