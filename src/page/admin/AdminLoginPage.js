import '../../css/admin.css';

function AdminLoginPage() {
    return (
        <div className="container">
            <div className="loginimg">
                <img src="/img/title.png" alt="댕댕비엔비" />
            </div>
            <div className="idfield">
                ID :
                <input type="text" className="idbar" />
            </div>
            <div className="pwdfield">
                PWD :
                <input type="password" className="idbar" />
            </div>
        </div>
    )
}

export default AdminLoginPage;