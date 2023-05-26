import '../../css/admin.css';

function Member() {
    return (
        <div className="container">

            <div className="menuheader">
                회원 관리
            </div>
            <div className="searchheader">
                상세검색
                <label htmlFor="nickname">닉네임 : </label>
                <input type="text" />
                <label htmlFor="signupDate">가입일 : </label>
                <input type="date" />
                <label htmlFor="lastLogin">최종 접속일 : </label>
                <input type="date" />
                <button className="searchbutton">검색</button>
            </div>
            <div className="buttonlist">
                <button className="changebutton">상태 변경</button>
                <button className="changebutton">탈퇴 처리</button>
            </div>

            <table className="memberlist">
                <thead>
                    <tr>
                        <th>회원번호</th>
                        <th>닉네임</th>
                        <th>상태</th>
                        <th>가입일</th>
                        <th>신고 처리 수</th>
                        <th>체크</th>
                    </tr>
                </thead>
            </table>

        </div>

    )
}

export default Member;