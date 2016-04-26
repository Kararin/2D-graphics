import {toggleEdited} from '../../actions/shapes';

export const baseMapState = ({
    common,
    shape,
    edited,
    shapeName
}) => {
    var {
        x,
        y,
        height,
        width
    } = shape, {
        center,
        step
    } = common,
    scaledX = center.x + x * step,
        scaledY = center.y - y * step,
        scaledHeight = height * step,
        scaledWidth = width * step;

    return {
        x: scaledX,
        y: scaledY,
        height: scaledHeight,
        width: scaledWidth,
        selected: edited.has(shapeName)
    };
};

export const baseMapProps = (dispatch, shapeName) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited(shapeName));
        }
    };
};