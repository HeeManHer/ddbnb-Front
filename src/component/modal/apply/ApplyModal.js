import "../../../css/modaltest.css";
import React from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';
import { registApplicantAPI } from '../../../api/applicantAPI';

function ApplyModal({ boardId }) {
    const dispatch = useDispatch();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const form = {
        member: { memberId: token.memberId },
        boardId
    }

    const commit = () => {
        dispatch(registApplicantAPI(form));
    }

    const rollback = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    return (

        <div className="modalsize111">
            <div className="inmodalcolor">
                모집 신청
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">모집에 신청하시겠습니까?</h1>
                <div className="dis-flex flex-column align-center ">
                    <h5 className="joinpost">신청 후 마이페이지 신청 기록에서 확인이 가능하며,</h5>
                    <h5 className="joinpost">모집자의 쪽지를 받을 수 있습니다.</h5>
                </div>

                <div className="button2list">
                    <button className="modalsize-button2" onClick={commit}>
                        예
                    </button>
                    <button className="modalsize-button2" onClick={rollback}>
                        아니요
                    </button>
                </div>
            </div>
        </div>
    );
}



export default ApplyModal;