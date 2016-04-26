import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {downDoor, edited},
    common
}) => {

    return baseMapState({
        common,
        shape: downDoor,
        edited,
        shapeName: 'downDoor'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'downDoor');
};

export default connect(mapStateToProps, mapPropsToState)(Base);