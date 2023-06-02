import { createActions, handleActions } from "redux-actions";

const initialState = {
    petsitterApply: false,
    declaration: false,
    registpost: false,
    canclepost: false
};

// export const OPEN_RECRUIT_LIST = 'modal/OPEN_RECRUIT_LIST';

export const OPEN_MODAL = 'modal/OPEN_MODAL';
export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

const actions = createActions({
    [OPEN_MODAL]: () => { },
    [CLOSE_MODAL]: () => { },
});



const modalsReducer = handleActions({
    [OPEN_MODAL]: (state, { payload }) => ({ ...state, [payload]: true }),
    [CLOSE_MODAL]: (state, { payload }) => ({ ...initialState })
}, initialState
);


export default modalsReducer;