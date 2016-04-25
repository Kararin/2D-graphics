import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {toggleEdited} from '../../actions/shapes';

const mapStateToProps = ({
    shapes,
    common
}) => {
    var {
        verBase,
        edited
    } = shapes, {
        x,
        y,
        height,
        width
    } = verBase, {
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
        selected: edited.has('verBase')
    };
};

const mapPropsToState = (dispatch) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited('verBase'));
        }
    };
};

export default connect(mapStateToProps, mapPropsToState)(Base);