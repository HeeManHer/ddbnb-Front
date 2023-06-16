import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../../api/LoginAPI";
import { useDispatch } from "react-redux";
import { getCurrentMember } from "../../api/MemberAPICalls";

function KakaoPage() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("너야?");
        dispatch(callKakaoLoginAPI(code)).then(() => {
            console.log("여긴돼??");
            if(dispatch(getCurrentMember()) == "새로운회원") {
                navigate("/profile", { replace: true });
            }
            navigate("/", { replace: true });
        });
    }, [code, dispatch, navigate]);

    return null;
}

export default KakaoPage;