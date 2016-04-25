import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Circle';
import {toggleEdited} from '../../actions/shapes';

const mapStateToProps = ({
    shapes,
    common
}) => {
    var {
        leftWheel,
        edited
    } = shapes, {
        x,
        y,
        radius
    } = leftWheel, {
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
        selected: edited.has('leftWheel')
    };
};

const mapPropsToState = (dispatch) => {
    return {
        toggleEdited: () => {
            dispatch(toggleEdited('leftWheel'));
        }
    };
};

export default connect(mapStateToProps, mapPropsToState)(Base);