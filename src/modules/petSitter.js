import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_PETSITTER = 'SET_PETSITTER';

const actions = createActions({
    [SET_PETSITTER]: () => { },
});

const petSitterReducer = handleActions({
    [SET_PETSITTER]: (state, { payload }) => payload
}, initialState
);

export default petSitterReducer; 