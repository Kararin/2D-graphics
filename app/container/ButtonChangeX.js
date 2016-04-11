import {connect} from 'react-redux';
import ButtonChangeX from '../view/ButtonChangeX';
import {setRectX} from '../actions/svg/rect';

const mapStateToProps = ({svg}) => {
    var {x} = svg.rect;

    return {
        x
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            changeX: (x) => {
                dispatch(setRectX(x));
            },
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonChangeX);
