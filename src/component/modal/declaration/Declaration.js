import "../../../css/modaltest.css";
import React, { useState } from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';
import "../../../css/declaration.css";
import { reportPostAPI } from '../../../api/reportAPI';

function Declaration({ category }) {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    }

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const [form, setForm] = useState({
        reportReason: '',
        reportDetail: '',
        reportCategory: category,
        currentUser: { memberId: token.memberId },
    })
    console.log(form);
    const [selectedOption, setSelectedOption] = useState("");

    const handleCheckboxChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleReportSubmit = () => {
        dispatch(reportPostAPI(form));
        closeModal();
    };
    console.log(form);
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

                    <div className="checkboxlist">
                        {[
                            { label: "광고 (부적절한 홍보 및 음란성 게시글 및 댓글)" },
                            { label: "욕설 / 반말 / 부적절한 언어 사용" },
                            { label: "회원 비방" },
                            { label: "기타 (상세 사유에 내용을 꼭 적어주세요.)" }
                        ].map((option) => (
                            <div key={option.value} className="checkdiv">
                                <input
                                    name="reportReason"
                                    type="checkbox"
                                    value={option.label}
                                    checked={selectedOption === option.label}
                                    onChange={handleCheckboxChange}
                                    onClick={() => setSelectedOption(option.label)}
                                />
                                <label className="reportlabel">{option.label}</label>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="dis-flex align-center justify-around">

                    <div className="detailreason">
                        상세 사유
                    </div>
                    <textarea className="reason1" value={form.reportDetail} onChange={handleCheckboxChange} name="reportDetail" />
                </div>

                <h5>*허위신고일 경우,신고자의 서비스 활동이 제한될 수 있으니 신중하게 신고해 주세요.</h5>
            </div>
            <div className="reportbtn">
                <button className="reportbtn1" onClick={handleReportSubmit}>신고하기</button>
                <button className="cancl" onClick={closeModal}>취소</button>
            </div>
        </div >
    )
}

export default Declaration;