import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SAMPLE = 'SAMPLE';

const actions = createActions({
    [SAMPLE]: () => { },
});

const sampleReducer = handleActions({
    [SAMPLE]: (state, { payload }) => {
        return payload;
    },
},
    initialState

);

export default sampleReducer; 