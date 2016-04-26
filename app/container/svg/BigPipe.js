import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {bigPipe, edited},
    common
}) => {

    return baseMapState({
        common,
        shape: bigPipe,
        edited,
        shapeName: 'bigPipe'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'bigPipe');
};

export default connect(mapStateToProps, mapPropsToState)(Base);