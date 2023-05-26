function PetSitterManage() { 
    return (
        <div>
        <div>
            {/* 헤더 */}
        </div>
        <div>
            {/* 메뉴바 */}
            <div>대시보드</div>
            <div>회원 관리</div>
            <div>게시판 관리</div>
            <div>신고 관리</div>
        </div>
        <div>
            <div>
                <h2>회원 관리</h2>
            </div>
            <div>
                <h3>상세검색</h3>
                <label htmlFor="Writer">작성자 : </label>
                <input type="text"/>
                <button>검색</button>
                <div>
                    <button>상태 변경</button>
                </div>
                <div>
                    <h4>게시글 번호</h4>
                    <h4>게시글 제목</h4>
                    <h4>작성자</h4>
                    <h4>게시글 등록일</h4> 
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

export default PetSitterManage;