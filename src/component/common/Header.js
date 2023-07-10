import { useState } from "react";
import { flushSync } from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callKakaoLogoutAPI, callNaverLogoutAPI } from "../../api/LoginAPI";
function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const admin = token !== null && token.memberId == '952' ? true : false;

    const logout = () => {
        //     if(SocialLogin == "KAKAO") {
        //         dispatch(callKakaoLogoutAPI());
        //         navigate("/", { replace: true });
        //     } 
        //     dispatch(callNaverLogoutAPI());
        // }
        // window.localStorage.removeItem('accessToken');
        dispatch(callNaverLogoutAPI());
        dispatch(callKakaoLogoutAPI());
        navigate("/", { replace: true });

    }

    const openMessageList = () => {

        const modal_width = '560';
        const modal_height = '515';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}`;

        window.open('/postMessageList', 'message', option);
    }

    if (token) {
        if (admin) {
            return (
                <header className="back-color dis-flex align-center">
                    <span onClick={() => navigate("/manage")} >관리자페이지</span>
                    <span onClick={() => navigate("/mypage")} >마이페이지</span>
                    <span onClick={logout} >로그아웃</span>
                </header>
            )
        } else {
            return (
                <header className="back-color dis-flex align-center">
                    <span onClick={openMessageList}>쪽지함</span>
                    <span onClick={() => navigate("/mypage")} >마이페이지</span>
                    <span onClick={logout} >로그아웃</span>
                </header>
            )
        }
    } else {
        return (
            <header className="back-color dis-flex align-center">
                <span onClick={() => navigate("/login")} >로그인</span>
            </header>
        )
    }

}

export default Header;