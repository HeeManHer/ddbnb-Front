import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callNaverLoginAPI } from "../../api/LoginAPI";

function NaverPage() {

    const code = new URL(window.location.href).searchParams.get('code');

    const state = new URL(window.location.href).searchParams.get('state');

    const NAVER_REDIRECT_URI = encodeURI('http://localhost:3000/login/oauth2/code/naver');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.memberReducer)

    // useEffect(
    //     () => {
    //         console.log('로그인시작')
    //         dispatch(callNaverLoginAPI(code, state));
    //         console.log('로그인끝')
    //         if(loginStatus) {
    //             console.log("로그인되어있습니다.")
    //         } else {
    //             alert("로그인에 실패하였습니다.")
    //         }
    //         navigate("/");
    //     }
    // )

    
    useEffect(() => {
        console.log("너야?");
        dispatch(callNaverLoginAPI(code, state)).then(() => {
            console.log("여긴돼??");
            navigate("/", { replace: true });
        });
    }, [code, dispatch, navigate]);

    return null;

}

export default NaverPage;