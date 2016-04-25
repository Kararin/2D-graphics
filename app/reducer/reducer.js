import {combineReducers} from 'redux';
import field from './field';
import common from './common';
import axis from './axis';
import shapes from './shape';
import point from './point';

export default combineReducers({
    field,
    common,
    axis,
    shapes,
    point
});