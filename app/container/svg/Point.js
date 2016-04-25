import {
    connect
} from 'react-redux';
import Base from '../../view/svg/Circle';

const mapStateToProps = ({
    point,
    common
}) => {
    var {
        x,
        y,
        radius
    } = point, {
        center,
        step
    } = common;
        // scaledX = center.x + x * step,
        // scaledY = center.y - y * step;

    return {
        x,
        y,
        radius: 3,
        style: {
            color: "red"
        }
    };
};


export default connect(mapStateToProps)(Base);