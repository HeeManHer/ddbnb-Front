import "../../../css/modaltest.css";
import React from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';

function CancelPost() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    return (

        <div className="modalsize111">
            <div className="inmodalcolor">
                게시글 등록 취소
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">게시글 등록을 취소하시겠습니까?</h1>
            </div>



            <div className="button2list">
                <button className="modalsize-button3" onClick={closeModal}>
                    예
                </button>
                <button className="modalsize-button3" onClick={closeModal}>
                    아니요
                </button>
            </div>
        </div>


    );
}
export default CancelPost;