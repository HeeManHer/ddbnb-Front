import { GET_PETMOMDETAIL } from '../modules/petdetail';

export const getPetMomDetail = (boardId) => {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petMom/${boardId}`;

    return async (dispatch, getState) => {
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        dispatch({ type: GET_PETMOMDETAIL, payload: result.data });
    }
}

