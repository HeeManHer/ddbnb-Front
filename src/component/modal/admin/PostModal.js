import '../../../css/admin.css';

function PostModal() {

    return (
        <div className="modalContainer border-black dis-flex flex-column justify-between">
            <div className="modalHeader back-color">
                게시글 관리
            </div>
            <div className="modalBody dis-flex flex-column justify-between">
                <div className="dis-flex flex-column justify-between">
                    <div>
                        <h2># 게시글 관리하기</h2>
                        <div className="dis-flex align-center justify-around">
                            <div>
                                <input type="checkbox" id="reportCancel" />
                                <label htmlFor="reportCancel">취소됨</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reportComplete" />
                                <label htmlFor="reportComplete">모집중</label>
                            </div>
                        </div>
                    </div>
                    <div className="reportContent border-black center">
                        <h2 ># 게시글</h2>
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
export default PostModal;