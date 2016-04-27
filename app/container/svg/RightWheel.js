import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Circle';
import {toggleEdited} from '../../actions/shapes';
import {baseMapDispatchToProps, baseMapStateToProps} from './BaseCircle';

const mapStateToProps = ({
    shapes,
    common
}) => {
    var {
        rightWheel,
        edited
    } = shapes;

    return baseMapStateToProps({
        shape: rightWheel,
        common,
        edited,
        shapeName: 'rightWheel'});
};

const mapPropsToState = (dispatch) => {
    return baseMapDispatchToProps(dispatch, 'rightWheel');
};

export default connect(mapStateToProps, mapPropsToState)(Base);