import {connect} from 'react-redux';
import Buttons from '../view/RectButtons';
import {changeX, changeY} from '../actions/shapes';

const mapStateToProps = ({common}) => {
    return {
        step: 1
    };
};

const masDispatchToProps = (dispatch) => {
    return {
        changeX: step => dispatch(changeX(step)),
        changeY: step => dispatch(changeY(step))
    };
};

export default connect(mapStateToProps, masDispatchToProps)(Buttons);
