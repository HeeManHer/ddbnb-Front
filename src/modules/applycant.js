import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_APPLICANT = 'SET_APPLICANT';

const actions = createActions({
    [SET_APPLICANT]: () => { },
});

const applicantsReducer = handleActions({
    [SET_APPLICANT]: (state, { payload }) => payload
}, initialState
);

export default applicantsReducer; 