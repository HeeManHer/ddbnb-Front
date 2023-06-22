import { GET_PETSITTERDETAIL, GET_PETSITTERLIST, POST_PETSITTER } from '../modules/petSitter';


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
