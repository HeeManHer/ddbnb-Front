import { GET_MEMBER, PUT_MEMBER, DELETE_MEMBER } from "../modules/MemberModule";
import { IS_LOGIN } from "../modules/LoginModule";


/* 현재 로그인 된 멤버 정보 가져오기 */
export const getCurrentMember = () => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/member/${token.memberId}`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: GET_MEMBER, payload: result.data.members });
            if (result.data.members.nickname.startsWith("새로운회원")) {
                return "새로운회원";
            }
        }
    };
}

/* 현재 로그인 된 멤버 정보 가져오기 */
export const getUpdateMember = (memberId, form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/member/${token.memberId}/postprofile`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Accept": '*/*',
                "Auth": token
            },
            body: form// 업데이트할 데이터를 JSON 문자열로 변환하여 요청에 포함
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: PUT_MEMBER, payload: result.data.members });
        }
    };
}

/* 현재 로그인 된 멤버가 탈퇴 */
export const deleteMember = (memberId) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/member/${token.memberId}`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            },
        })

        if (result.status === 200) {
            dispatch({ type: DELETE_MEMBER, payload: result.data });
            dispatch({ type: IS_LOGIN });
            window.localStorage.removeItem('accessToken');
            window.location.reload();
        }
    };
}
