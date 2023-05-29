import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_REVIEWMODAL = 'SET_REVIEWMODAL';

const actions = createActions({
    [SET_REVIEWMODAL]: () => { },
});

const reviewmodalReducer = handleActions({
    [SET_REVIEWMODAL]: (state, { payload }) => payload
}, initialState
);

export default reviewmodalReducer; 