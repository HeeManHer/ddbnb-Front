import style from './collectModal.module.css';
import React, { useState } from "react";
import { CLOSE_MODAL } from '../../../modules/petCollectModule';
import { useDispatch } from 'react-redux';


function PetSitterCollectCancle() {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL, payload: "petsittercollectcancle" });
    };

    return (
        <div className="modalsize111">
            <div className="inmodalcolor">
                펫시터 모집취소
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">모집을 취소하시겠습니까?</h1>
                <div className="dis-flex flex-column align-center ">
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
    )
}

export default PetSitterCollectCancle;