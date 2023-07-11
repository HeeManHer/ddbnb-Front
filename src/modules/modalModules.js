import { handleActions } from "redux-actions";

const initialState = {
    okState: false,
    cancel: false
};

export const OPEN_MODAL = 'modal/OPEN_MODAL';
export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: { ...initialState }
});



const modalsReducer = handleActions({
    [OPEN_MODAL]: (state, { payload }) => ({ ...state, [payload]: true }),
    [CLOSE_MODAL]: () => {
        return {
            ...initialState
        };
    }
}, initialState);


export default modalsReducer;