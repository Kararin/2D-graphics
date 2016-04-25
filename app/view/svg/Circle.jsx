import React from 'react';

const Rect = ({
    x, y,
    radius,
    toggleEdited,
    selected,
    style
}) => {
    var newStyle = Object.assign({}, style,
        {strokeWidth: selected ? '2px' : '0.5px'});

    return (
        <circle
            cx = {x}
            cy = {y}
            r = {radius}
            style = {newStyle}
            onClick = {() => {toggleEdited()}}
        />
    )
};

Rect.defaultProps = {
    style: {
        stroke: 'black',
        strokeWidth: '0.5px',
        fill: 'grey',
        fillOpacity: 0.4
    },
    toggleEdited: console.log(' not implemented')
}

export default Rect;