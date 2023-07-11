import style from './MainStyle.module.css';

const KAKAO_REST_API_KEY = '202bf1013addf514255b52a8c9c69ebf';
const KAKAO_REDIRECT_URI = `http://localhost:3000/kakao/callback`;
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = 'T0mWG2VjAfBH9cYz6Qrf';
const NAVER_REDIRECT_URI = encodeURI(`http://${process.env.REACT_APP_RESTAPI_URL}/login/oauth2/code/naver`);
const NAVER_STATE_STRING = 'login';
const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE_STRING}`;

// const GOOGLE_CLIENT_ID = '525204361597-ih6gpjgmfsa797sinujfj7jgikj0qp0h.apps.googleusercontent.com';
// const GOOGLE_REDIRECT_URI = encodeURI(`http://${process.env.REACT_APP_RESTAPI_URL}/login/oauth2/code/google`);
// const GOOGLE_AUTH_URI = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20email`;

const loginHandler = (platform) => {

    switch (platform) {
        case 'N':
            window.location.href = NAVER_AUTH_URI;
            break;
        case 'K':
            window.location.href = KAKAO_AUTH_URI;
            break;
        // case 'G':
        //     window.location.href = GOOGLE_AUTH_URI;
        //     break;

    }
}

function LoginPage() {
    return (
        <div className={style.loginStyle}>
            <h1><img src="/img/loginTitle.png" alt="댕댕비엔비" /></h1>
            <h2> 간편로그인 </h2>

            {/* <div onClick={() => loginHandler('G')}><img src="../../../img/googleLogin.png" />
            </div>
            <br /> */}
            <div onClick={() => loginHandler('N')}><img src="../../../img/naverLogin.png" />
            </div>
            <br />
            <div onClick={() => loginHandler('K')}><img src="../../../img/kakaoLogin.png" />
            </div>
        </div>
    )
}

export default LoginPage;