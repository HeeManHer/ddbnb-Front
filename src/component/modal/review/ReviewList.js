import React, { useState } from "react";
import "../review/ReviewModal.css";

function ReviewList() {

    const [peopleCount, setPeopleCount] = useState(1);

    const handleIncrease = () => {
        setPeopleCount(prevCount => prevCount + 1);
    };


    return (
        <div className="reviewmodal">
            <div className="reviewmodal-header">리뷰 작성</div>
            <div className="reviewlist">댕댕비엔비를 함께한 신청자를 선택해주세요.</div>
            <div className="reviewlist-people">
                {Array.from({ length: peopleCount }, (_, index) => (
                    <div className="reviewlist-people-line" key={index}>
                        <div className="reviewlist-organize">
                            <div className="reviewlist-imgandName">
                                <div className="reviewlist-img">
                                </div>
                                <h6>너네 강아지모습</h6>
                            </div>
                            <h5 className="reviewlist-join">펫시터 참여 기록</h5>
                            <h4 className="reviewlist-h4">회</h4>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id={`cb${index + 1}`} />
                            <label htmlFor={`cb${index + 1}`}></label>
                        </div>
                    </div>
                ))}
            </div>
            <div><button></button></div>
            <div><button className="reviewmodal-main3" >리뷰작성</button>
                <div><button className="ex" onClick={handleIncrease} >일단 생성버튼 달아둠</button></div>
            </div>
        </div>
    )
}

export default ReviewList;