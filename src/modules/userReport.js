import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_USER_REPORT = 'GET_USER_REPORT';

const actions = createActions({
    [GET_USER_REPORT]: () => { },
});

const userReportReducer = handleActions({
    [GET_USER_REPORT]: (state, { payload }) => payload
}, initialState
);

export default userReportReducer; 