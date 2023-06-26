import Modal from 'react-modal';
import "../../../css/modaltest.css";
import React, { useState } from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';
import "../../../css/declaration.css";
import { reportPostAPI } from '../../../api/reportAPI';

function Declaration() {

    const dispatch = useDispatch();

    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const postreport = () => {
        dispatch(reportPostAPI());
    }

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL, payload: "petsitterApply" });
    };


    return (
        <div className="modalsize1111">
            <div className="inmodalcolor">
                신고하기
            </div>
            <div className="graybackground">
                <div className="dis-flex align-center justify-around">

                    <div className="dis-flex align-center justify-center">
                        신고 사유
                    </div>
                    <div className="checkboxlist" >
                        <div className="checkdiv">
                            <input type="checkbox" />
                            <label className="reportlabel">광고 (부적절한 홍보 및 음란성 게시글 및 댓글)</label>
                        </div>
                        <div className="checkdiv">
                            <input type="checkbox" />
                            <label className="reportlabel">욕설 / 반말 / 부적절한 언어 사용</label>
                        </div>
                        <div className="checkdiv">
                            <input type="checkbox" />
                            <label className="reportlabel">회원 비방 </label>
                        </div>
                        <div className="checkdiv">
                            <input type="checkbox" />
                            <label className="reportlabel">기타 (상세 사유에 내용을 꼭 적어주세요.)</label>
                        </div>
                    </div>
                </div>
                <div className="dis-flex align-center justify-around">

                    <div className="detailreason">
                        상세 사유
                    </div>
                    <textarea className="reason1" />
                </div>

                <h5>*허위신고일 경우,신고자의 서비스 활동이 제한될 수 있으니 신중하게 신고해 주세요.</h5>
            </div>
            <div className="reportbtn">
                <button className="reportbtn1" onClick={closeModal}>신고하기</button>
                <button className="cancl" onClick={closeModal}>취소</button>
            </div>
        </div >
    )
}

export default Declaration;