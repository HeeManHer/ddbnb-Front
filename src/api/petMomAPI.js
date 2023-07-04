import { POST_PETMOM, PUT_PETMOM, SET_PETMOM } from "../modules/petMom";
import { GET_PETMOM, PUT_PETMOMDETAIL, PUT_PETMOM } from "../modules/petMom";

//펫맘 리스트 조회
export const getPetMomList = (currentPage, searchValue) => {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/list?page=${currentPage}`;

    if (searchValue?.location != '') {
        URL += `&location=${searchValue?.location}`;
    }

    if (searchValue?.petYN != '') {
        URL += `&petYN=${searchValue?.petYN}`;
    }

    if (searchValue?.startDate != '') {
        URL += `&startDate=${searchValue?.startDate}`;
    }

    if (searchValue?.endDate != '') {
        URL += `&endDate=${searchValue?.endDate}`;
    }

    if (searchValue?.otherCondition != '') {
        URL += `&otherCondition=${searchValue?.otherCondition}`;
    }

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
            dispatch({ type: GET_PETMOM, payload: result.data });
        }

    };
}

export function putPetMomPage(boardId, form) {
  
    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/modify`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(form)
        }).then(response => response.json());
        alert(result.message);
        dispatch({ type: PUT_PETMOMDETAIL, patload: result.data });
    }
}


//펫맘 글쓰기
export function postPetMomPage(form) {

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/regist`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
            }, body: form

        }).then(response => response.json());

        if (result.status === 200) {
            alert(result.message);
        }
    };
}


//내가쓴 게시글 부르기
export const getMyPetMomList = (currentPage) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/mypetmoms?page=${currentPage}&memberId=${token.memberId}`;

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
            dispatch({ type: GET_PETMOM, payload: result.data });
        }
    };
}


export const putMypetMomCancle = (boardId, form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/list/${boardId}/status`;

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
            dispatch({ type: PUT_PETMOM, payload: result.data });
        }
    };
}
