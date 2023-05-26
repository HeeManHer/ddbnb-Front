import '../../../css/admin.css';

function ReportModal() {
    return (
        <div className="modalcontainer">
            <div className="modalheader back-color">
                신고 처리
            </div>
            <div>
                <h2 className="modal2h"># 신고 처리하기</h2>
                <input type="checkbox" id="reportCancel" className="reportbox1"/>
                <label htmlFor="reportCancel" className="reporttext2">신고 반려</label>
                <input type="checkbox" id="reportComplete" className="reportbox2"/>
                <label htmlFor="reportComplete" className="reporttext2">신고 처리</label>
                <div className="reportcontent">
                    <h2 className="reporttext1"># 신고 처리</h2>
                    <input type="checkbox" id="postDelete" className="reportbox1"/>
                    <label htmlFor="postDelete" className="reporttext1">게시글 삭제</label>
                </div>
            </div>
            <div className ="reportbutton">
                <button className="cancelbutton">취소</button>
                <button className="checkbutton back-color">확인</button> 
            </div>
        </div>
    )
}

export default ReportModal;