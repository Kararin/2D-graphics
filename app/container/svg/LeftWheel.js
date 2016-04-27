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
        leftWheel,
        edited
    } = shapes;

    return baseMapStateToProps({
        shape: leftWheel,
        common,
        edited,
        shapeName: 'leftWheel'});
};

const mapPropsToState = (dispatch) => {
    return baseMapDispatchToProps(dispatch, 'leftWheel');
};

export default connect(mapStateToProps, mapPropsToState)(Base);