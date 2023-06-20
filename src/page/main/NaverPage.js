import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callNaverLoginAPI } from "../../api/LoginAPI";
import { getCurrentMember } from "../../api/MemberAPICalls";

function NaverPage() {

    const code = new URL(window.location.href).searchParams.get('code');

    const state = new URL(window.location.href).searchParams.get('state');

    const NAVER_REDIRECT_URI = encodeURI('http://localhost:3000/login/oauth2/code/naver');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.memberReducer)

    useEffect(() => {
        console.log("너야?");
        dispatch(callNaverLoginAPI(code, state)).then(() => dispatch(getCurrentMember()))
            .then((member) => {
                if (member === "새로운회원") {
                    navigate("/loginprofile", { replace: true });
                } else {
                    navigate("/", { replace: true });
                }
            });
    }, [code, dispatch, navigate]);
    return null;
}

export default NaverPage;