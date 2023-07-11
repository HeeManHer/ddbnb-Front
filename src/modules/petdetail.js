import { createActions, handleActions } from 'redux-actions';

const initialState = {};

export const SET_PETMOMDETAIL = 'SET_PETMOMDETAIL';
export const SET_PETSITTERDETAIL = 'SET_PETSITTERDETAIL';
export const GET_PETMOMDETAIL = 'GET_PETMOMDETAIL';

const actions = createActions({
    [SET_PETMOMDETAIL]: () => { },
    [SET_PETSITTERDETAIL]: () => { },
    [GET_PETMOMDETAIL]: () => { },
});


const petDetailReducer = handleActions({
    [SET_PETMOMDETAIL]: (state, { payload }) => { return payload; },
    [SET_PETSITTERDETAIL]: (state, { payload }) => { return payload; },
    [GET_PETMOMDETAIL]: (state, { payload }) => payload
},
    initialState
);

export default petDetailReducer;
