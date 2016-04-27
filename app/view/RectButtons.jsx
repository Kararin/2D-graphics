import React from 'react';

export default ({
    changeX,
    changeY,
    changeScale,
    step
}) => (
    <div className="my-buttons">
        <button
            className="button-x-right"
            onClick = {e => { changeX(step); }}>
            <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
        </button>
        <button
            className="button-x-left"
            onClick = {e => { changeX(-1 * step); }}>
            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        </button>
        <button
            className="button-x-up"
            onClick = {e => { changeY(step); }}>
            <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        </button>
        <button
            className="button-x-down"
            onClick = {e => { changeY(-1 * step); }}>
            <span
                className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
        </button>

        <button
            className="button-scale-more"
            onClick = {e => { changeScale(step); }}>
            <span
                className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
        </button>
        <button
            className="button-scale-less"
            onClick = {e => { changchangeScaleeY(-1 * step); }}>
            <span
                className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
        </button>
    </div>
)
