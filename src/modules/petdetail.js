import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_PETMOMDETAIL = 'SET_PETMOMDETAIL';
export const SET_PETSITTERDETAIL = 'SET_PETSITTERDETAIL';

const actions = createActions({
    [SET_PETMOMDETAIL]: () => { },
    [SET_PETSITTERDETAIL]: () => { },
});

const petDetailReducer = handleActions({
    [SET_PETMOMDETAIL]: (state, { payload }) => payload,
    [SET_PETSITTERDETAIL]: (state, { payload }) => payload
}, initialState
);

export default petDetailReducer; 