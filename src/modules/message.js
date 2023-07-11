import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const SET_MESSAGELIST = 'SET_MESSAGELIST';

const actions = createActions({
    [SET_MESSAGELIST]: () => { },
});


const messageReducer = handleActions({
    [SET_MESSAGELIST]: (state, { payload }) => payload
}, initialState
);

export default messageReducer; 