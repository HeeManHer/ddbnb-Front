import { createActions, handleActions } from 'redux-actions';

const initialState = {
    location: '',
    petSize: [],
    care: [],
    startDate: '',
    endDate: '',
    petYN: [],
    otherCondition: []
};

export const SET_VALUE = 'SET_VALUE';
export const RESET_VALUE = 'RESET_VALUE';


const actions = createActions({
    [SET_VALUE]: () => { },
    [RESET_VALUE]: () => { },
});


const searchReducer = handleActions(
    {
        [SET_VALUE]: (state, { payload }) => ({ ...state, ...payload }),
        [RESET_VALUE]: (state, { payload }) => initialState,
    }, initialState
);

export default searchReducer; 