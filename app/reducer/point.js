export default (state = {
    x: 0,
    y: 0,
    color: "blue"
}, action) => {
    var actions = {
            SET_POINT_POSITION: () => {
                return Object.assign({}, state, {
                    x: action.x,
                    y: action.y
                });
            },
        },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
};