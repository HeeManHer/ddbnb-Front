import { GET_MEMBER } from "../modules/MemberModule";
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

    const token = JSON.parse( window.localStorage.getItem('accessToken'));

    const requestURL = `http://localhost:8080/api/v1/member/${token.memberId}`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                // "Auth": token
            }
        }).then(res => res.json());

        if (result.status === 200) {

            dispatch({ type: GET_MEMBER, payload: result.data.members});
            
            // if(result.data.member.nickname.startsWith("새로운회원")) {
                
            //     // dispatch({ type: OPEN_NICKNAME });
            // }
        }
    };
}

