import React from 'react';
import HorizontalBase from '../../container/svg/HorizontalBase';
import VerticalBase from '../../container/svg/VerticalBase';
import UpDoor from '../../container/svg/UpDoor';
import DownDoor from '../../container/svg/DownDoor';
import SmallPipe from '../../container/svg/SmallPipe';
import BigPipe from '../../container/svg/BigPipe';
import LeftWheel from '../../container/svg/LeftWheel';
import RightWheel from '../../container/svg/RightWheel';
import Point from '../../container/svg/Point';

export default ({
    width,
    height,
    clickAction
}) => (
    <svg
        width = {width}
        height = {height}
        className = 'my-canvas'
        onDoubleClick = {(e) => {
            var svg = document.querySelector('svg'),
                pt = svg.createSVGPoint(),
                points;

            pt.x = e.clientX; pt.y = e.clientY;
            points = pt.matrixTransform(svg.getScreenCTM().inverse());

            clickAction(points.x, points.y);
        }}>

        <HorizontalBase/>
        <VerticalBase/>
        <UpDoor/>
        <DownDoor/>
        <SmallPipe/>
        <BigPipe/>
        <LeftWheel/>
        <RightWheel/>
        <Point/>
    </svg>
);