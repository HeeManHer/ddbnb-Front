import { SET_PETMOM } from "../modules/petMom";
import { GET_PETMOM } from "../modules/petMom";




export const getPetMomList = (currentPage) => {

    let URL;

    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8080/api/v1/petmom/list?page=${currentPage}`;
    } else {
        URL = 'http://localhost:8080/api/v1/petmom/list';
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
            dispatch({ type: GET_PETMOM, payload: result.data });
        }

    }
}


