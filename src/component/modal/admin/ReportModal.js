import '../../../css/admin.css';

function ReportModal() {
    return (
        <div className="modalContainer border-black dis-flex flex-column justify-between">
            <div className="modalHeader back-color">
                신고 처리
            </div>
            <div className="modalBody dis-flex flex-column justify-between">
                <div className="dis-flex flex-column justify-between">
                    <div>
                        <h2># 신고 처리하기</h2>
                        <div className="dis-flex align-center justify-around">
                            <div>
                                <input type="checkbox" id="reportCancel" />
                                <label htmlFor="reportCancel">신고 반려</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reportComplete" />
                                <label htmlFor="reportComplete">신고 처리</label>
                            </div>
                        </div>
                    </div>
                    <div className="reportContent border-black center">
                        <h2 ># 신고 처리</h2>
                        <div>
                            <input type="checkbox" id="postDelete" className="" />
                            <label htmlFor="postDelete" className="">게시글 삭제</label>
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

export default ReportModal;