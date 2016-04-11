import {connect} from 'react-redux';
import Image from '../../view/svg/Image';

const mapStateToProps = (state) => {
    var {width, height} = state.common.size,
        {step} = state.common,
        {rect} = state.svg,
        center = {
            x: width / 2,
            y: height / 2
        };

    return {
        width,
        height,
        rect,
        center,
        step
    };
};

export default connect(mapStateToProps)(Image);