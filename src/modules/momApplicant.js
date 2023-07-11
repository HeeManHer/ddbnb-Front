import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_MOMAPPLICANT = 'SET_MOMAPPLICANT';
export const GET_MOMAPPLICANT = 'GET_MOMAPPLICANT';

const actions = createActions({
    [SET_MOMAPPLICANT]: () => { },
    [GET_MOMAPPLICANT]: () => { },
});


const momApplicantsReducer = handleActions({
    [SET_MOMAPPLICANT]: (state, { payload }) => payload,
    [GET_MOMAPPLICANT]: (state, { payload }) => payload
}, initialState
);

export default momApplicantsReducer; 