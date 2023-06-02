import { useState } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();

    const [token, setToken] = useState(false);
    const [admin, setAdmin] = useState(false);

    if (token) {
        if (admin) {
            return (
                <header className="back-color dis-flex align-center">
                    <span onClick={() => navigate("/manage")} >관리자페이지</span>
                    <span onClick={() => navigate("/mypage")} >마이페이지</span>
                    <span onClick={() => { setToken(false); setAdmin(false); navigate("/") }} >로그아웃</span>
                </header>
            )
        } else {
            return (
                <header className="back-color dis-flex align-center">
                    <span onClick={() => navigate("/mypage")} >마이페이지</span>
                    <span onClick={() => { setToken(false); navigate("/") }} >로그아웃</span>
                </header>
            )
        }
    } else {
        return (
            <header className="back-color dis-flex align-center">
                <span onClick={() => navigate("/login")} >로그인</span>
                <span onClick={() => { setToken(true); navigate("/") }} >일반 로그인 후 화면</span>
                <span onClick={() => { setToken(true); setAdmin(true); navigate("/") }} >관리자 로그인 후 화면</span>
            </header>
        )
    }

}

export default Header;