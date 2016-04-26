import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {upDoor, edited},
    common}) => {

    return baseMapState({
        common,
        shape: upDoor,
        edited,
        shapeName: 'upDoor'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'upDoor');
};

export default connect(mapStateToProps, mapPropsToState)(Base);