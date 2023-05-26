import '../../../css/admin.css';

function MemberModal() {

    return (
    <div className="modalcontainer">
        <div className="modalheader back-color" >
            회원 관리
        </div>
        <div>
            <h2 className="modal2h"># 회원관리</h2>
            <p>
                <input type="checkbox" id="memberstop" className="reportbox1"/>
                <label htmlFor="memberstop" className="reporttext2">회원 정지</label>
                <p/>
                <input type="checkbox" id="memberUnstoppable" className="reportbox1"/>
                <label htmlFor="memberUnstoppable" className="reporttext2">정지 해제</label>
                <p/>
                <input type="checkbox" id="memberAlldayStop" className="reportbox1"/>
                <label htmlFor="memberAlldayStop" className="reporttext2">영구 정지</label>                   
                <p/>
            </p>
            <div className="reportcontent">
                <h2 className="reporttext1"># 정지 기간</h2>
                <label htmlFor="stopDay" className="reporttext3">차단 일 수 </label>
                <input type="number" max= "30" min="0" id="stopDay" className="number"/>
                <label htmlFor="daycount">일 (1 ~ 30) </label>
                <p/>
                <label htmlFor="stopReason" className="reporttext3">차단 이유   </label>
                <input type="text" id="stopReason"/>
            </div>
        </div>
        <div className ="reportbutton">
                <button className="memberbutton1">취소</button>
                <button className="memberbutton2 back-color">확인</button> 
        </div>
    </div>  
    )
}

export default MemberModal;