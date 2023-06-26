import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_USER_REPORT = 'GET_USER_REPORT';
export const GET_MEMBER_LIST = 'GET_MEMBER_LIST';
export const GET_PETMOM_LIST = 'GET_PETMOM_LIST';
export const GET_PETSITTER_LIST = 'GET_PETSITTER_LIST';
export const GET_REPORTMEMBER_LIST = 'GET_REPORTMEMBER_LIST';
export const GET_REPORTPOST_LIST = 'GET_REPORTPOST_LIST';
export const POST_REPORT = 'POST_REPORT';

const actions = createActions({
    [GET_USER_REPORT]: () => { },
    [GET_MEMBER_LIST]: () => { },
    [GET_PETMOM_LIST]: () => { },
    [GET_PETSITTER_LIST]: () => { },
    [GET_REPORTMEMBER_LIST]: () => { },
    [GET_REPORTPOST_LIST]: () => { },
    [POST_REPORT]: () => { },
});

const reportReducer = handleActions({
    [GET_USER_REPORT]: (state, { payload }) => payload,
    [GET_MEMBER_LIST]: (state, { payload }) => payload,
    [GET_PETMOM_LIST]: (state, { payload }) => payload,
    [GET_PETSITTER_LIST]: (state, { payload }) => payload,
    [GET_REPORTMEMBER_LIST]: (state, { payload }) => payload,
    [GET_REPORTPOST_LIST]: (state, { payload }) => payload,
    [POST_REPORT]: (state, { payload }) => payload,
}, initialState
);

export default reportReducer; 