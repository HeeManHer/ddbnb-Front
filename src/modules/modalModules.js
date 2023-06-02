import { createActions, handleActions } from "redux-actions";

const initialState = {
    // recruitListState: false,
    okState: false
};

// export const OPEN_RECRUIT_LIST = 'modal/OPEN_RECRUIT_LIST';

export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: { ...initialState }
});

const modalsReducer = handleActions({
    // [OPEN_RECRUIT_LIST]: (state, payload) => {
    //     return {
    //         ...state,
    //         recruitListState: true
    //     };
    // },

    [CLOSE_MODAL]: () => {
        return {
            ...initialState
        };
    }
}, initialState);

export default modalsReducer;