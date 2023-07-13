import { GET_APPLICANT } from '../modules/applycant';
import { CLOSE_MODAL } from '../modules/petSittermodal';

//전체 참가자 조회
export const getApplicantListAPI = (currentPage, boardId, size) => {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/${boardId}?page=${currentPage}`;

    if (size !== null) {
        URL += `&size=${size}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        }).then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_APPLICANT, payload: result.data });
        }
    }
}

export const getMyApplyListAPI = (currentPage, category) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/myApply?page=${currentPage}&memberId=${token.memberId}&category=${category}`;

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

export const registApplicantAPI = (form) => {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant`;

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


//삭제
export const deleteApplicantAPI = (applicantId) => {

    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/${applicantId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
        if (result.status === 204) {
            alert("취소 성공");
            window.location.reload()
        }
    };

}