import '../../../css/admin.css';

function PostModal() {
    
    return (
        <div className="modalcontainer">
            <h1 className="modalheader back-color">게시글 관리</h1>
            <div>
                <h2 className="modal2h"># 게시글 관리하기</h2>
                <input type="checkbox" id="recruit" className="reportbox1"/>
                    <label htmlFor="recruit" className="reporttext2">모집중</label>
                    <input type="checkbox" id="cancel" className="reportbox2"/>
                    <label htmlFor="cancel" className="reporttext2">취소됨</label>
                    <div className="reportcontent">
                        <h2 className="reporttext1"># 게시글</h2>
                        <input type="checkbox" id="deletePost" className="reportbox1"/>
                        <label htmlFor="deletePost" className="reporttext1">게시글 삭제</label>
                    </div>
            </div>
            <div className ="reportbutton">
                <button className="cancelbutton">취소</button>
                <button className="checkbutton back-color">확인</button> 
            </div>
        </div>
    )
}
export default PostModal;