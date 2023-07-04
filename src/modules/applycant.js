import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_APPLICANT = 'SET_APPLICANT';
export const GET_APPLICANT = 'GET_APPLICANT';
export const GET_MOMAPPLICANT = 'GET_MOMAPPLICANT';

const actions = createActions({
    [SET_APPLICANT]: () => { },
    [GET_APPLICANT]: () => { },
    [GET_MOMAPPLICANT]: () => { },
});

const applicantsReducer = handleActions({
    [SET_APPLICANT]: (state, { payload }) => payload,
    [GET_APPLICANT]: (state, { payload }) => payload,
    [GET_MOMAPPLICANT]: (state, { payload }) => payload
}, initialState
);

export default applicantsReducer; 