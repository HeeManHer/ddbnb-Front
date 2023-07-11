import { createActions, handleActions } from 'redux-actions';

const initialState = "";

export const SET_LOCATION = 'SET_LOCATION';


const actions = createActions({
    [SET_LOCATION]: () => { }
});


const locationReducer = handleActions(
    {
        [SET_LOCATION]: (state, { payload }) => payload
    }, initialState
);

export default locationReducer; 