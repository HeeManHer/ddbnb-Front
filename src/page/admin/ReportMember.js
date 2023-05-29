import '../../css/admin.css';

function ReportMember() {
    return (
        <div className="container">
            <div className="menuheader">
                회원 신고 게시글 신고
            </div>
            <div className="searchheader2">
                상세검색
                <label htmlFor="nickname" className="reporter">신고자 : </label>
                <input type="text" />
                <button className="searchbutton2">검색</button>
            </div>
            <div className="buttonlist">
                <button className="changebutton">상태 변경</button>
            </div>

            <table className="memberlist">
                <thead>
                    <tr>
                        <th>신고 번호</th>
                        <th>신고자</th>
                        <th>피신고자</th>
                        <th>신고일자</th>
                        <th>신고사유</th>
                        <th>처리상태</th>
                        <th>체크</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default ReportMember;