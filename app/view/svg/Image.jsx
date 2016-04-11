import React from 'react';

export default ({
    width,
    height,
    rect,
    center,
    step
}) => (
    <svg
        width = {width}
        height = {height}
        className = 'my-canvas'>

        <rect
            x = {center.x + rect.x * step}
            y = {center.y - rect.y * step}
            width = {rect.width * step}
            height = {rect.height * step}
            style = {{
                stroke: rect.stroke,
                fill: 'none'
            }}/>
    </svg>
);