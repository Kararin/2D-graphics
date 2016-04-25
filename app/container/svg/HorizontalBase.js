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
        horBase,
        edited
    } = shapes, {
        x,
        y,
        height,
        width
    } = horBase, {
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
        selected: edited.has('horBase')
    };
};

const mapPropsToState = (dispatch) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited('horBase'));
        }
    };
};

export default connect(mapStateToProps, mapPropsToState)(Base);