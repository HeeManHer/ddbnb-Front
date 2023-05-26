function ReportMember() { 
    return (
    <div>
        <div>
            <div>
                <h2>회원 신고</h2>
                <h2>게시글 신고</h2>
            </div>
            <div>
                <h3>상세검색</h3>
                <label htmlFor="reporter">신고자 : </label>
                <input type="text"/>
                <button>검색</button>
                <div>
                    <button>상태 변경</button>
                </div>
                <div>
                    <h4>신고 번호</h4>
                    <h4>신고자</h4>
                    <h4>피신고자</h4>
                    <h4>신고일자</h4> 
                    <h4>신고사유</h4>
                    <h4>처리상태</h4>
                    <h4>체크</h4>
                </div>
            </div>
        </div>
        <div>
            {/* 푸터 */}
        </div>
    </div>
    )
}

export default ReportMember;