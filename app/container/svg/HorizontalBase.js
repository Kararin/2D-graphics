import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {horBase, edited},
    common
}) => {

    return baseMapState({
        common,
        shape: horBase,
        edited,
        shapeName: 'horBase'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'horBase');
};

export default connect(mapStateToProps, mapPropsToState)(Base);