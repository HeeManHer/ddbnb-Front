import { GET_APPLICANT } from '../modules/applycant';
import { CLOSE_MODAL } from '../modules/petSittermodal';



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

export const registMomApplicantAPI = (form) => {

    const URL = `http://localhost:8080/api/v1/momApplicant/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(form)
        }).then(response => response.json())

        if (result.status === 200) {
            alert(result.message);
            dispatch({ type: CLOSE_MODAL });

        }
    }
}

export const registApplicantAPI = (form) => {

    const URL = `http://localhost:8080/api/v1/applicant/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(form)
        }).then(response => response.json())

        if (result.status === 200) {
            alert(result.message);
            dispatch({ type: CLOSE_MODAL });

        }
    }
}