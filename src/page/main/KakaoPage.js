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
        dispatch(callKakaoLoginAPI(code))
            .then(() => {
                const token = JSON.parse(window.localStorage.getItem('accessToken'));
                dispatch(getCurrentMember(token.memberId))
                    .then((member) => {
                        if (member === "새로운회원") {
                            navigate("/loginprofile", { replace: true });
                        } else {
                            navigate("/", { replace: true });
                        }
                    });
            })
    }, [code, dispatch, navigate]);

    return null;
}

export default KakaoPage;