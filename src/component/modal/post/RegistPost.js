import "../../../css/modaltest.css";
import React from "react";
import { CLOSE_MODAL } from '../../../modules/petSittermodal';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function RegistPost({ regist }) {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const handleRegist = () => {
        regist();
        closeModal();
    };

    return (

        <div className="modalsize111">
            <div className="inmodalcolor">
                게시글 등록
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">게시글을 등록하시겠습니까?</h1>
            </div>

            <div className="button2list">
                <NavLink
                    to="../"
                    className="modalsize-button3"
                    onClick={handleRegist}

                >
                    예
                </NavLink>
                <button className="modalsize-button3" onClick={closeModal}>
                    아니요
                </button>
            </div>
        </div>

    );
}


export default RegistPost;