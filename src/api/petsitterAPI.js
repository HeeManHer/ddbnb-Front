import { GET_PETSITTERDETAIL, GET_PETSITTERLIST, PUT_PETSITTER } from '../modules/petSitter';

export const callPetsitterListAPI = (currentPage, searchValue) => {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petSitter?page=${currentPage}`;

    if (searchValue?.location !== '') {
        URL += `&location=${searchValue?.location}`;
    }

    if (searchValue?.startDate !== '') {
        URL += `&startDate=${searchValue?.startDate}`;
    }

    if (searchValue?.endDate !== '') {
        URL += `&endDate=${searchValue?.endDate}`;
    }

    if (searchValue?.petSize !== '') {
        URL += `&petSize=${searchValue?.petSize}`;
    }

    if (searchValue?.care !== '') {
        URL += `&care=${searchValue?.care}`;
    }
    console.log(URL);
    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
                // "Auth": token
            }
        }).then(response => response.json());

        if (result.status === 200) {
            dispatch({ type: GET_PETSITTERLIST, payload: result.data });
        }
    };

}

export function registPetsitterAPI(form) {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petSitter`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            }, body: form

        }).then(res => res.json());

        if (result.status === 200) {
            alert(result.message);
            window.location.href = "./";
        }
    };
}


export function getPetsitterdetailAPI(boardId) {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petSitter/${boardId}`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        }).then(response => response.json());
        dispatch({ type: GET_PETSITTERDETAIL, payload: result.data });
    };
}

export function putPetsitterAPI(form) {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petSitter`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        }).then(response => response.json());

        alert(result.message);
        window.location.href = "../";
        // dispatch({ type: PUT_PETSITTERDETAIL, patload: result.data });
    };
}


export const putMypetSitterCancle = (boardId, form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petSitter/${boardId}/status`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Authorization": token
            },
            body: JSON.stringify(form) // 업데이트할 데이터를 JSON 문자열로 변환하여 요청에 포함
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: PUT_PETSITTER, payload: result.data });
        }
    };
}

export const getMyPetSitterList = ({ currentPage }) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/mypetsitters?page=${currentPage}&memberId=${token.memberId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
                // "Auth": token
            }
        }).then(response => response.json());

        if (result.status === 200) {
            dispatch({ type: GET_PETSITTERLIST, payload: result.data });
        }
    };
};

