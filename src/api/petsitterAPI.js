import { GET_PETSITTERDETAIL, GET_PETSITTERLIST, POST_PETSITTER, PUT_PETSITTER } from '../modules/petSitter';


export const callPetsitterListAPI = (currentPage) => {

    let URL;

    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8080/api/v1/petsitter/list?page=${currentPage}`;
    } else {
        URL = `http://localhost:8080/api/v1/petsitter/list`;
    }

    return async (dispatch, getState) => {


        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
                // "Auth": token
            }
        })
            .then(response => response.json());

        if (result.status === 200) {
            dispatch({ type: GET_PETSITTERLIST, payload: result.data });
        }
    };

}

export function registPetsitterAPI(petreg) {

    let URL = `http://localhost:8080/api/v1/petsitter/regist`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }, body: JSON.stringify(petreg)

        }).then(res => res.json());
        if (result.status === 200) {
            alert(result.message);
        }
        dispatch({ type: POST_PETSITTER, payload: result.data });

    };
}


export function getPetsitterdetailAPI(boardId) {

    let URL = "http://localhost:8080/api/v1/petsitter/list/" + boardId;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());
        dispatch({ type: GET_PETSITTERDETAIL, payload: result.data });
    }
};


export const putMypetSitterCancle = (boardId,form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://localhost:8080/api/v1/petsitter/list/${boardId}/status`;
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
        console.log(result);

        if (result.status === 200) {
            dispatch({ type: PUT_PETSITTER, payload: result.data });
        }
    };
}

    export const getMyPetSitterList = ({currentPage}) => {
        const token = JSON.parse(window.localStorage.getItem('accessToken'));

        let URL;

        if (currentPage !== undefined || currentPage !== null) {
            URL = `http://localhost:8080/api/v1/petsitter/mypetsitters?page=${currentPage}&memberId=${token.memberId}`;
        } else {
            URL = 'http://localhost:8080/api/v1/petsitter/mypetsitters';
        }

        return async (dispatch, getState) => {

            const result = await fetch(URL, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "*/*",
                    // "Auth": token
                }
            })
                .then(response => response.json());
    
            if (result.status === 200) {
                dispatch({ type: GET_PETSITTERLIST, payload: result.data });
                console.log(result);
            }
        };
    };

