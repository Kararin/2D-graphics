export default (state = {
    rect: {
        width: 4,
        height: 4,
        x: 5,
        y: 3,
        stroke: '#000000'
    }
}, action) => {
    var actions = {
        SET_RECT_X: () => Object.assign({}, state, {rect: rect(state.rect, action)}),
        SET_RECT_Y: () => Object.assign({}, state, {rect: rect(state.rect, action)})
    },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
};

const rect = (state = {
    width: 4,
    height: 4,
    x: 5,
    y: 3,
    stroke: '#000000'
}, action) => {
    var actions = {
        SET_RECT_X: () => Object.assign({}, state, {x: action.x}),
        SET_RECT_Y: () => Object.assign({}, state, {y: action.y})
    },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
}