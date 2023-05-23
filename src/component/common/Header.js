import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();

    return (
        <header className="back-color dis-flex aling-center">
            <span onClick={() => navigate("/")} >로그인</span>
            <span onClick={() => navigate("/")} >회원가입</span>
            <span onClick={() => navigate("/mypage")} >마이페이지</span>
        </header>

    )
}

export default Header;