import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {verBase, edited},
    common
}) => {

    return baseMapState({
        common,
        shape: verBase,
        edited,
        shapeName: 'verBase'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'verBase');
};

export default connect(mapStateToProps, mapPropsToState)(Base);