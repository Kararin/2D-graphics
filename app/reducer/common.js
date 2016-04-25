export default (state = {
    size: {
        width: 1000,
        height: 800
    },
    step: 20,
    begin: 0.5,
    center: {
        x: 1000 / 2,
        y: 800 / 2
    }
}, action) => {
    var actions = {
        'SET_SIZE': () => {
            return Object.assign({}, state, {
                width: action.width,
                height: action.height,
                center: {
                    x: action.width / 2,
                    y: action.height / 2
                }
            });
        },
        'SET_STEP': () => {
            return Object.assign({}, state, {
                step: action.step
            });
        },
        'SET_BEGIN': () => {
            return Object.assign({}, state, {
                begin: action.begin
            });
        }
    },
        result = state;

        if (action[action.type]) {
            result = action[action.type]();
        }

    return result;
};
