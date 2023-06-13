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
                "Authorization": accessToken.accessToken
                // "Authorization": `Bearer ${accessToken.accessToken}`
                // "Authorization": accessToken
                
            }
            
            // body: JSON.stringify({ content: "responseDto" })
            
        }).then(res => res.json());  
        console.log("보내는거 확인용",accessToken.accessToken);
        console.log("결과", result);    
        if (result.status === 200) {
            window.localStorage.removeItem('accessToken');
            dispatch({ type: IS_LOGIN });
        
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

            // dispatch(getCurrentMember());

        }
    };
}




// import { IS_LOGIN } from "../modules/LoginModule";
// import { getCurrentMember } from "./MemberAPICalls";

// const requestAPI = async (requestURL, data) => {
//     try {
//         const response = await fetch(requestURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': '*/*'
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error('API request failed');
//         }

//         return response.json();
//     } catch (error) {
//         // API 요청 중에 에러 발생 시 처리
//         console.error('API request error:', error);
//         throw error;
//     }
// };

// export const callLoginAPI = (platform, code, state) => {
//     let requestURL = '';
//     let data = { code };

//     switch (platform) {
//         case 'K':
//             requestURL = ''; // 카카오 로그인 API URL
//             break;
//         case 'N':
//             requestURL = ''; // 네이버 로그인 API URL
//             data.state = state;
//             break;
//         default:
//             throw new Error('Invalid platform');
//     }

//     return async (dispatch) => {
//         try {
//             const result = await requestAPI(requestURL, data);

//             if (result.httpStatus === 200) {
//                 window.localStorage.setItem('jwtToken', JSON.stringify(result.results.token));

//                 if (platform === 'N') {
//                     dispatch(getCurrentMember());
//                 }

//                 dispatch({ type: IS_LOGIN });
//             }
//         } catch (error) {
//             // API 호출 중에 에러 발생 시 처리
//             console.error('API call error:', error);
//             // 에러 처리를 위해 알맞은 액션을 디스패치하거나 예외를 다시 던질 수 있습니다.
//         }
//     };
// };