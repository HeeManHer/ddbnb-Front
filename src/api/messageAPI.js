import { SET_MESSAGELIST } from '../modules/message';

export function getMessageList(page, memberId) {

    const url = `http://localhost:8080/api/v1/message/${memberId}?page=${page}`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: SET_MESSAGELIST, payload: result.data });
        }
    }

}

export function deleteMessage(page, memberId) {

    const url = `http://localhost:8080/api/v1/message`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: SET_MESSAGELIST, payload: result.data });
        }
    }

}