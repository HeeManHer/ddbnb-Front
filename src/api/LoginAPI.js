import { IS_LOGIN } from "../modules/LoginModule";
import { getCurrentMember } from "./MemberAPICalls";

export const callKakaoLoginAPI = (code) => {

    const requestURL = 'http://localhost:8080/api/v1/login/kakaocode';

    return async (dispatch, getState) => {

        let data = { code: code }

        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
        if (result.status === 200) {
            window.localStorage.setItem('accessToken', JSON.stringify(result.data.token));
            dispatch({ type: IS_LOGIN });
            console.log(result);
        } 
    };
}

export const callKakaoLogoutAPI = () => {

    const requestURL = 'http://localhost:8080/api/v1/login/kakaologout';

    return async (dispatch, getState) => {
        const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));
        console.log("되지?",accessToken);
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": accessToken.access_token
            }
        }).then(res => res.json());  
        console.log("보내는거 확인용",accessToken.access_token);
        console.log("결과", result);    
        if (result.status === 200) {
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
            window.location.reload();
            
        }
    };
}

export const callNaverLoginAPI = (code, state) => {

    console.log("제발");
    const requestURL = 'http://localhost:8080/api/v1/login/navercode';
    console.log("여기같은데?");

    return async (dispatch, getState) => {

        let data = { code: code, state: state }

        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(data)

        }).then(res => res.json());
        console.log(result);

        if (result.status === 200) {
            window.localStorage.setItem('accessToken', JSON.stringify(result.data.token));
            dispatch({ type: IS_LOGIN });
        }
    };
}

export const callNaverLogoutAPI = () => {

    const requestURL = 'http://localhost:8080/api/v1/login/naverlogout';

    return async (dispatch, getState) => {
        const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));
        console.log("되지?",accessToken);
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": accessToken.access_token
            }
        }).then(res => res.json());  
        console.log("보내는거 확인용",accessToken.access_token);
        console.log("결과", result);    
        if (result.status === 200) {
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
            window.location.reload();
        }
    };
}
