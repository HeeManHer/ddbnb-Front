import { GET_MEMBER, PUT_MEMBER, DELETE_MEMBER } from "../modules/MemberModule";
import { IS_LOGIN } from "../modules/LoginModule";

// import { OPEN_NICKNAME } from "../modules/ModalsModule";
export const getMembers = async () => {

    /* 백엔드에 토큰 보내기 */
    const token = window.localStorage.getItem('jwtToken');

    const requestURL = ''

    const result = await fetch(requestURL, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*',
            "Auth": token
        }
    }).then(res => res.json());
}

/* 현재 로그인 된 멤버 정보 가져오기 */
export const getCurrentMember = () => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://localhost:8080/api/v1/member/${token.memberId}`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());
        console.log(result);
        if (result.status === 200) {
            dispatch({ type: GET_MEMBER, payload: result.data.members });
            if (result.data.members.nickname.startsWith("새로운회원")) {
                console.log(result.data.members.nickname.startsWith("새로운회원"));
                return "새로운회원";
            }
        }
    };
}

/* 현재 로그인 된 멤버 정보 가져오기 */
export const getUpdateMember = (memberId, form) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const requestURL = `http://localhost:8080/api/v1/member/${token.memberId}/postprofile`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            },
            body: JSON.stringify(form) // 업데이트할 데이터를 JSON 문자열로 변환하여 요청에 포함
        }).then(res => res.json());
        console.log(result);

        if (result.status === 200) {
            dispatch({ type: PUT_MEMBER, payload: result.data.members });
        }
    };
}
/* 현재 로그인 된 멤버가 탈퇴 */
export const deleteMember = (memberId) => {

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    console.log(token);
    // const memberId = JSON.parse(token).memberId;

    const requestURL = `http://localhost:8080/api/v1/member/${token.memberId}`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            },
        })
        console.log(result);
        
        if (result.status === 200) {
            dispatch({ type: DELETE_MEMBER, payload: result.data });
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
            window.location.reload();
        }
    };
}
