import { GET_APPLICANT } from '../modules/applycant';


//전체 참가자 조회
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




export const getMyApplyListAPI =  ({ currentPage }) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL;   
    
    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8080/api/v1/applicant/mypetsitters?page=${currentPage}&memberId=${token.memberId}`;
    } else {
        URL = 'http://localhost:8080/api/v1/applicant/mypetsitters';
    }
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
            console.log(result);
        }
    }
}

export const getMomApplicantList = (applicantId) => {

    const URL = `http://localhost:8080/api/v1/momApplicant/${applicantId}`;

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