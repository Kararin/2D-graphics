import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Rect';
import {baseMapState, baseMapProps} from './RectBase';

const mapStateToProps = ({
    shapes: {smallPipe, edited},
    common
}) => {

    return baseMapState({
        common,
        shape: smallPipe,
        edited,
        shapeName: 'smallPipe'});
};

const mapPropsToState = (dispatch) => {
    return baseMapProps(dispatch, 'smallPipe');
};

export default connect(mapStateToProps, mapPropsToState)(Base);