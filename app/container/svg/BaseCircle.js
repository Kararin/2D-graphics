import {toggleEdited} from '../../actions/shapes';

export const baseMapStateToProps = ({
    shape,
    common,
    edited,
    shapeName
}) => {
    var {
        x,
        y,
        radius,
        scale
    } = shape, {
        center,
        step
    } = common,
        scaledX = center.x + x * step,
        scaledY = center.y - y * step,
        scaledRadius = radius * step;

    return {
        x: scaledX,
        y: scaledY,
        radius: scaledRadius,
        scale,
        selected: edited.has(shapeName)

    };
};

export const baseMapDispatchToProps = (dispatch, shapeName) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited(shapeName));
        }
    };
};