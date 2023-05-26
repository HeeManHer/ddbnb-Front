import { useNavigate } from "react-router-dom";
function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className="back-color dis-flex aling-center">
            <span onClick={() => navigate("/")} >관리자 페이지</span>
            <span onClick={() => navigate("/")} >로그인</span>
        </header>

    )
}

export default AdminHeader;