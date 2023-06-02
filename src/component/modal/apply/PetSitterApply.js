import Modal from 'react-modal';
import "../../../css/modaltest.css";
import React, { useState } from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';

function PetSitterApply() {

    const dispatch = useDispatch();

    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL, payload: "petsitterApply" });
    };

    return (

        <div className="modalsize111">
            <div className="inmodalcolor">
                펫시터 신청
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">모집에 신청하시겠습니까?</h1>
                <div className="dis-flex flex-column align-center ">
                    <h5 className="joinpost">신청 후 마이페이지 신청 기록에서 확인이 가능하며,</h5>
                    <h5 className="joinpost">모집자의 쪽지를 받을 수 있습니다.</h5>
                </div>



                <div className="button2list">
                    <button className="modalsize-button2" onClick={closeModal}>
                        예
                    </button>
                    <button className="modalsize-button2" onClick={closeModal}>
                        아니요
                    </button>
                </div>
            </div>
        </div>

    );
}



export default PetSitterApply;