import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callNaverLoginAPI } from "../../api/LoginAPI";
import { getCurrentMember } from "../../api/MemberAPICalls";

function NaverPage() {

    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
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