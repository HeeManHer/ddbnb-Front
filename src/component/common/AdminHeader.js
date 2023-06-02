import { useNavigate } from "react-router-dom";
function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className="back-color dis-flex align-center">
            <span onClick={() => navigate("/")} >메인 페이지</span>
            {/* <span onClick={() => navigate("/manage")} >로그인</span> */}
        </header>

    )
}

export default AdminHeader;