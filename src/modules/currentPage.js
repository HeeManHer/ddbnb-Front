import { createActions, handleActions } from 'redux-actions';

const initialState = 1;

export const RESET_PAGE = 'RESET_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const INCRESE_PAGE = 'INCRESE_PAGE';
export const DECRESE_PAGE = 'DECRESE_PAGE';


const actions = createActions({
    [RESET_PAGE]: () => { },
    [SET_PAGE]: () => { },
    [INCRESE_PAGE]: () => { },
    [DECRESE_PAGE]: () => { },
});


const pageReducer = handleActions(
    {
        [RESET_PAGE]: (state, { payload }) => 1,
        [SET_PAGE]: (state, { payload }) => payload,
        [INCRESE_PAGE]: (state, { payload }) => state + 1,
        [DECRESE_PAGE]: (state, { payload }) => state - 1,
    }, initialState
);

export default pageReducer; 