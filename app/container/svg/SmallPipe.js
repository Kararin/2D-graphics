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
        smallPipe,
        edited
    } = shapes, {
        x,
        y,
        height,
        width
    } = smallPipe, {
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
        selected: edited.has('smallPipe')
    };
};


const mapPropsToState = (dispatch) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited('smallPipe'));
        }
    };
};

export default connect(mapStateToProps, mapPropsToState)(Base);