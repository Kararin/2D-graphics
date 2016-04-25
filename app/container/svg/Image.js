import {connect} from 'react-redux';
import Image from '../../view/svg/Image';
import {setPosition} from '../../actions/point';


const mapStateToProps = (state) => {
    var {width, height} = state.common.size,
        {step} = state.common,
        center = {
            x: width / 2,
            y: height / 2
        };

    return {
        width,
        height,
        center,
        step
    };
};

const mapPropsToState = (dispatch) => {
    return {
        clickAction: (x, y) => {
            dispatch(setPosition(x, y));
        }
    };
};

export default connect(mapStateToProps, mapPropsToState)(Image);