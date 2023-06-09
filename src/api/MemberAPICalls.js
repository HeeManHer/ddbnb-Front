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

    const token = window.localStorage.getItem('jwtToken');

    const requestURL = ''

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());

        if (result.httpStatus === 200) {

            dispatch({ type: GET_MEMBER, payload: result.results.member });
            
            if(result.results.member.nickname.startsWith("새로운회원")) {
                
                // dispatch({ type: OPEN_NICKNAME });
            }
        }
    };
}

