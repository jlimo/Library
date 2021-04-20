import React from 'react';

const library = (props) => {
    return (
        <div className="movie">
            <h3>{props.library.image}</h3>
            <h4>{props.library.title}</h4>
            <h5>{props.library.author}</h5>
        </div>
    );
};

export default library;