function PetMomManage() {
    return (
        <div className="container">

            <div className="menuheader">
                펫시터 모집글 게시판
            </div>
            <div className="searchheader2">
                상세검색
                <label htmlFor="nickname">작성자 : </label>
                <input type="text" />
                <button className="searchbutton">검색</button>
            </div>
            <div className="buttonlist">
                <button className="changebutton">상태 변경</button>
            </div>

            <table className="memberlist">
                <thead>
                    <tr>
                        <th>게시글 번호</th>
                        <th>게시글 제목</th>
                        <th>작성자</th>
                        <th>게시글 등록일</th>
                        <th>체크</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default PetMomManage;