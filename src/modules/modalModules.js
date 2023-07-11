import { handleActions } from "redux-actions";

const initialState = {
    okState: false
};

export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: { ...initialState }
});

const modalsReducer = handleActions({
    [CLOSE_MODAL]: () => {
        return {
            ...initialState
        };
    }
}, initialState);

export default modalsReducer;