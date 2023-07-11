import { useNavigate } from 'react-router-dom';
import '../../css/admin.css';

function AdminNavbar() {

    const navigate = useNavigate();

    return (
        <div className="menuContainer ">
            <div className="menutext" onClick={() => navigate('/manage')}>대시보드</div>
            <div className="menutext" onClick={() => navigate('./member')}>회원 관리</div>
            <div className="menutext" onClick={() => navigate('./board')}>게시판 관리</div>
            <div className="menutext" onClick={() => navigate('./report')}>신고 관리</div>
        </div>
    )
}

export default AdminNavbar;