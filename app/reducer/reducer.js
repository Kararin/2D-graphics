import {combineReducers} from 'redux';
import field from './field';
import common from './common';
import axis from './axis';
import svg from './svg';

export default combineReducers({field, common, axis, svg});