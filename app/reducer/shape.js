import {Set} from 'immutable';

export default (state = {
    verBase: createRect({
        width: 4,
        height: 6,
        x: 10,
        y: 6,
    }),
    horBase: createRect({
        width: 6,
        height: 3,
        x: 4,
        y: 3
    }),
    upDoor: createRect({
        width: 2,
        height: 2,
        x: 11,
        y: 5
    }),
    downDoor: createRect({
        width: 2,
        height: 3,
        x: 11,
        y: 3
    }),
    smallPipe: createRect({
        width: 1,
        height: 2,
        x: 7,
        y: 5
    }),
    bigPipe: createRect({
        width: 1,
        height: 3,
        x: 5,
        y: 6
    }),
    leftWheel: {
        x: 6,
        y: -0.5,
        radius: 1,
        scale: 1
    },
    rightWheel: {
        x: 12,
        y: -0.5,
        radius: 1,
        scale: 1
    },
    edited: Set()
}, action) => {
    var actions = {
        SET_SHAPE_X: () => {
            var shape = state[action.shape],
                newShape = Object.assign({}, shape, {x: action.x});

            return Object.assign({}, state, {
                [action.shape]: newShape
            });
        },
        SET_SHAPE_Y: () => {
            var shape = state[action.shape],
                newShape = Object.assign({}, shape, {y: action.y});

            return Object.assign({}, state, {
                [action.shape]: newShape
            });
        },
        TOGGLE_EDITED: () => {
            var {edited} = state,
                {shapeName} = action;

            return Object.assign({}, state, {
                edited: edited.has(shapeName) ?
                    edited.delete(shapeName) :
                    edited.add(shapeName)
            });
        },
        CHANGE_X: () => {
            var shapesArray = changeInArray(state, action, 'x');

            return Object.assign({}, state, ...shapesArray);
        },
        CHANGE_Y: () => {
            var shapesArray = changeInArray(state, action, 'y');

            return Object.assign({}, state, ...shapesArray);
        },
        CHANGE_SCALE: () => {
            var shapesArray = changeInArray(state, action, 'scale');

            return Object.assign({}, state, ...shapesArray);
        }
    },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
};

const changeInArray = (state, action, attrib) => {
    var newShapes = state.edited.map(shapeName => {
        var shape = state[shapeName];

        return {
            [shapeName]: Object.assign({}, shape, {
                [attrib]: shape[attrib] + action.step
            }
        )};
    });

    return newShapes.toArray();
};

const createRect = ({x, y, width, height, scale}) => ({
    x,
    y,
    width: width,
    height: height,
    scale: scale || 1
});