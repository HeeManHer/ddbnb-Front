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

export function getPetMompage(currentPage, boardId) {
    // 43.201.211.175
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

        dispatch({ type: GET_PETMOM, payload: result.data });
    }
}


//내가쓴 게시글 부르기
export const getMyPetMomList = ({ currentPage }) => {
    const token = JSON.parse( window.localStorage.getItem('accessToken'));

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
            dispatch({ type: GET_PETMOM , payload: result.data });

            console.log(result);
        }
    };
}
