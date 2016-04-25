import {connect} from 'react-redux';
import ButtonChangeX from '../view/ButtonChangeX';

const mapStateToProps = () => {
    // var {x} = svg.rect;

    return {
        // x
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            changeX: (x) => {
            },
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonChangeX);
