import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_PETMOM = 'SET_PETMOM';

const actions = createActions({
    [SET_PETMOM]: () => { },
});

const petMomReducer = handleActions({
    [SET_PETMOM]: (state, { payload }) => payload
}, initialState
);

export default petMomReducer; 