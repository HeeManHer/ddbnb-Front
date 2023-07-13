import { createActions, handleActions } from 'redux-actions';

const initialState = {
    sido: "",
    sigungu: ''
};

export const SET_LOCATION = 'SET_LOCATION';
export const RESET_LOCATION = 'RESET_LOCATION';


const actions = createActions({
    [SET_LOCATION]: () => { },
    [RESET_LOCATION]: () => { }
});


const locationReducer = handleActions(
    {
        [SET_LOCATION]: (state, { payload }) => ({ ...state, ...payload }),
        [RESET_LOCATION]: (state, { payload }) => initialState
    }, initialState
);

export default locationReducer; 