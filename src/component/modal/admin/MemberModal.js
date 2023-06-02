import '../../../css/admin.css';

function MemberModal() {

    return (
        <div className="modalContainer border-black dis-flex flex-column justify-between">
            <div className="modalHeader back-color">
                회원 관리
            </div>
            <div className="modalBody dis-flex flex-column justify-between">
                <div className="dis-flex flex-column justify-between">
                    <div>
                        <h2># 회원관리</h2>
                        <div className="dis-flex align-center justify-around">
                            <div>
                                <input type="checkbox" id="reportComplete" />
                                <label htmlFor="reportComplete">정지 해제</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reportCancel" />
                                <label htmlFor="reportCancel">회원 정지</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reportComplete" />
                                <label htmlFor="reportComplete">영구 정지</label>
                            </div>
                        </div>
                    </div>
                    <div className="reportContent border-black center">
                        <h2 ># 정지 기간</h2>
                        <div>
                            <input type="checkbox" id="postDelete" />
                            <label htmlFor="postDelete" className="">게시글 삭제</label>
                        </div>
                        <div className="dis-flex justify-between">
                            <label>차단 일 수 </label>
                            <div>
                                <input type="number" max="30" min="0" id="stopDay" className="number" />
                                <label>일 (1~30) </label>
                            </div>
                        </div>
                        <div className="dis-flex justify-between">
                            <label>차단 이유</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="reportbutton dis-flex align-center justify-between">
                    <button className="cancelbutton">취소</button>
                    <button className="checkbutton back-color">확인</button>
                </div>
            </div>
        </div >
    )
}

export default MemberModal;