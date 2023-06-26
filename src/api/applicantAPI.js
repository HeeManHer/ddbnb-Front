import { GET_APPLICANT } from '../modules/applycant';



export const getApplicantListAPI = (applicantId) => {

    const URL = `http://localhost:8080/api/v1/applicant/${applicantId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_APPLICANT, payload: result.data });
        }
    }


}