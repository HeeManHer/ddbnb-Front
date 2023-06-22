import { createActions, handleActions } from 'redux-actions';


const initialState = [];

export const SET_PETMOM = 'SET_PETMOM';
export const GET_PETMOM = 'petmom/GET_PETMOM';
export const POST_PETMOM = 'petmom/POST_PETMOM';
export const PUT_PETMOM = 'petmom/POST_PETMOM';

const actions = createActions({
    [SET_PETMOM]: () => { },
    [GET_PETMOM]: () => { },
    [POST_PETMOM]: () => { },
    [PUT_PETMOM]: () => { },
});

const petMomReducer = handleActions({
    [SET_PETMOM]: (state, { payload }) => {
        return payload;
    },
    [GET_PETMOM]: (state, { payload }) => { return payload; },
    [POST_PETMOM]: (state, { payload }) => {
        return payload;
    },
    [PUT_PETMOM]: (state, { payload }) => {
        return payload;
    },
},
    initialState

);

export default petMomReducer; 