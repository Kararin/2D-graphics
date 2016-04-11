import React from 'react';

export default ({
    changeX,
    x
}) => (
    <button onClick = {() => {changeX(++x);}}>
    X
    </button>
)