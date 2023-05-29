import { useNavigate } from 'react-router-dom';
import '../../css/admin.css';

function AdminNavbar() {

    const navigate = useNavigate();

    return (
        <div className="menucontainer">
            <div className="menutext1" onClick={() => navigate('/manage/dashboard')}>
                대시보드
            </div>
            <div className="menutext1" onClick={() => navigate('/manage/member')}>
                회원 관리
            </div>
            <div className="menutext1" onClick={() => navigate('/manage/petMom')}>
                게시판 관리
            </div>
            <div className="menutext1" onClick={() => navigate('/manage/reportMember')}>
                신고 관리
            </div>
        </div>
    )
}

export default AdminNavbar;