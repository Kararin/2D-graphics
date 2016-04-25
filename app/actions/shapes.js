export const setX = (x) => ({type: 'SET_SHAPE_X', x, shape});

export const setY = (y) => ({type: 'SET_SHAPE_Y', y, shape});

export const toggleEdited = (shapeName) => ({type: 'TOGGLE_EDITED', shapeName});