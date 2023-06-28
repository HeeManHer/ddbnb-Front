import { SET_PETMOMDETAIL } from '../modules/petdetail';
import { GET_PETMOMDETAIL } from '../modules/petdetail';



export const getPetMomDetail = (boardId) => {

    let URL = "http://localhost:8080/api/v1/petmom/list/" + boardId;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());
        console.log(`result = ${result}`);
        dispatch({ type: GET_PETMOMDETAIL, payload: result.data });
    }
}

