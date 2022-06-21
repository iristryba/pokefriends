import React from 'react';

const Scroll = (props) => {
    return (
        <div className="flex flex-wrap">
            {props.children}
        </div>
    );
};

// style={{overflowY: 'scroll', border: '3px solid black', height: '700px'}}

export default Scroll;