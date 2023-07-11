import { GET_REVIEW, GET_REVIEWLIST } from '../modules/ReviewModule';

//내 리뷰 리스트 조회
export const callReviewListAPI = ({ currentPage }) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/reviews?page=${currentPage}&size=8&memberId=${token.memberId}`;

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
            dispatch({ type: GET_REVIEWLIST, payload: result.data });
        }
    };
}

/* 상세 조회 */
export const callReviewDetailAPI = (reviewId) => {

    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/reviews/${reviewId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Auth": token
            }
        }).then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_REVIEW, payload: result.data });
        }

    };
}

export const registNewReview = (form, close) => {
    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/reviews`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        }).then(response => response.json())

        if (result.status === 200) {
            alert(result.message);
            close();
        }
    };

}