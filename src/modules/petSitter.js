import { createActions, handleActions } from 'redux-actions';


const initialState = [];

export const SET_PETSITTER = 'SET_PETSITTER';
export const GET_PETSITTERLIST = 'petsitter/GET_PETSITTERLIST';
export const POST_PETSITTER = 'petsitter/POST_PETSITTER';
export const GET_PETSITTERDETAIL = 'petsitter/PETSITTERDETAIL';
export const PUT_PETSITTER = 'petsitter/PUT_PETSITTER';

const actions = createActions({
    [SET_PETSITTER]: () => { },
    [GET_PETSITTERLIST]: () => { },
    [POST_PETSITTER]: () => { },
    [GET_PETSITTERDETAIL]: () => { },
    [PUT_PETSITTER]: () => { },
});

const petSitterReducer = handleActions({
    [SET_PETSITTER]: (state, { payload }) => {
        return payload;
    },
    [GET_PETSITTERLIST]: (state, { payload }) => { return payload; },
    [POST_PETSITTER]: (state, { payload }) => {
        return payload;
    },
    [GET_PETSITTERDETAIL]: (state, { payload }) => {
        return payload;
    },
    [PUT_PETSITTER]: (state, { payload }) => {
        return payload;
    },
},
    initialState

);

export default petSitterReducer; 