import React from "react";
import "../apply/CancellationModal.css";

function CancellationSitter() {
    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };

    return (
        <div className="modalsize">
            <button className="modalsize-button1">펫시터 신청취소</button>
            <h1>신청을 취소하시겠습니까?</h1>
            <div>
                <h5 className="h2">신청취소시 신청기록은 자동 삭제 됩니다.</h5>
                <button className="modalsize-button2" onClick={toggleSelected}>
                    예
                </button>
                <button className="modalsize-button2" onClick={toggleSelected}>
                    아니요
                </button>
            </div>
        </div>
    );
}
export default CancellationSitter;