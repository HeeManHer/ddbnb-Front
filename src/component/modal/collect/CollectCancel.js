import React from "react";
import { CLOSE_MODAL } from '../../../modules/petCollectModule';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { putBoardStatusChange } from "../../../api/petsitterAPI";

function CollectCancel() {

    const dispatch = useDispatch();
    const { boardId } = useParams();

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const onClickhandle = () => {
        dispatch(putBoardStatusChange({ boardId, boardStatus: "모집취소" }));
        closeModal();
        window.location.reload();
    }

    return (
        <div className="modalsize111">
            <div className="inmodalcolor">
                모집취소
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">모집을 취소하시겠습니까?</h1>
                <div className="dis-flex flex-column align-center ">
                </div>

                <div className="button2list">
                    <button className="modalsize-button2" onClick={onClickhandle}>
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

export default CollectCancel;