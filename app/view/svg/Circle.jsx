import React from 'react';

const Rect = ({
    x, y,
    radius,
    toggleEdited,
    selected,
    style,
    scale
}) => {
    var newStyle = Object.assign({}, style,
        {strokeWidth: selected ? '2px' : '0.5px'});

    return (
        <circle
            r = {radius}
            style = {newStyle}
            onClick = {() => {toggleEdited()}}
            transform = {`matrix(${scale},0,0, ${scale}, ${x}, ${y})`}
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
    scale: 1,
    toggleEdited: console.log(' not implemented')
}

export default Rect;