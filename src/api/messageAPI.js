import postMessageList from '../data/postMessageList.json';
import { SET_MESSAGELIST } from '../modules/message';

export function getMessageList() {

    return async function (dispatch, getState) {

        return dispatch({ type: SET_MESSAGELIST, payload: postMessageList });
    }

}