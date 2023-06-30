import { POST_PETMOM, PUT_PETMOM, SET_PETMOM } from "../modules/petMom";
import { GET_PETMOM } from "../modules/petMom";



//펫맘 리스트 조회
export const getPetMomList = (currentPage, searchValue) => {

    let URL = `http://localhost:8080/api/v1/petmom/list?page=${currentPage}`;

    if (searchValue?.location != '') {
        console.log(searchValue?.location)
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
    console.log(URL);
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

    };
}

export function putPetMomPage(page) {

    let URL = `http://localhost:8080/api/v1/petmom/modify`;
    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(page)
        }).then(response => response.json());

    }
}


//펫맘 글쓰기
export function postPetMomPage(form) {

    let URL = `http://localhost:8080/api/v1/petmom/regist`;

    return async function (dispatch, getState) {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }, body: JSON.stringify(form)

        }).then(response => response.json());

        if (result.status === 200) {
            alert(result.message);
        }
        // dispatch({ type: POST_PETMOM, payload: result.data });
    };
}


//내가쓴 게시글 부르기
export const getMyPetMomList = ({ currentPage }) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL;

    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8080/api/v1/petmom/mypetmoms?page=${currentPage}&memberId=${token.memberId}`;
    } else {
        URL = 'http://localhost:8080/api/v1/petmom/mypetmoms';
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
            console.log(result);
        }
    };
}


export const putMypetMomCancle = (boardId, form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://localhost:8080/api/v1/petmom/list/${boardId}/status`;
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
            dispatch({ type: PUT_PETMOM, payload: result.data });
        }
    };
}
