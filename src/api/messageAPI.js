import { SET_MESSAGELIST } from '../modules/message';

export function getMessageList(page, category, memberId) {

    const url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/messages/${category}/${memberId}?page=${page}`;

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
export function getMessageDetail(messageId) {

    const url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/message/${messageId}`;

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
export function registMessageDetail(form) {
    const url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/message`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(form)
        }).then(res => res.json());

        if (result.status === 201) {
            alert(result.message);
            window.location.href = '/postMessageList';
        }
    }
}

export function deleteMessage(deleteList) {

    const url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/messages`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(deleteList)
        }).then(res => res.json());

        if (result.status === 204) {
            alert(result.message);
            window.location.reload();
        }
    }

}