import { IS_LOGIN } from "../modules/LoginModule";

export const callKakaoLoginAPI = (code) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/login/kakaocode`;

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
        }
    };
}

export const callKakaoLogoutAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/login/kakaologout`;

    return async (dispatch, getState) => {
        const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": accessToken.access_token
            }
        }).then(res => res.json());
        if (result.status === 200) {
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
            window.location.reload();
        }
    };
}

export const callNaverLoginAPI = (code, state) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/login/navercode`;

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

        if (result.status === 200) {
            window.localStorage.setItem('accessToken', JSON.stringify(result.data.token));
            dispatch({ type: IS_LOGIN });
        }
    };
}

export const callNaverLogoutAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/login/naverlogout`;

    return async (dispatch, getState) => {
        const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));

        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": accessToken.access_token
            }
        }).then(res => res.json());

        if (result.status === 200) {
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
            window.location.reload();
        }
    };
}
