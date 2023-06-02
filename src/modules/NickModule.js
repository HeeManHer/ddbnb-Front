import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = '';

/* 액션 */
export const CHECK_NICKNAME     = 'nickname/CHECK_NICKNAME';
export const RESET_NICKNAME     = 'nickname/RESET_NICKNAME';

const actions = createActions({
    [CHECK_NICKNAME]: () => {},
});

/* 리듀서 */
const nicknameReducer = handleActions(
    {
        [CHECK_NICKNAME]: (state, { payload }) => {
            return payload;
        },
        [RESET_NICKNAME]: (state, { payload }) => {
            return initialState;
        }

    },
    initialState
);

export default nicknameReducer;