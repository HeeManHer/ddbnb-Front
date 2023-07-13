import { deleteApplicantAPI } from "../../../api/applicantAPI";
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from "../../../modules/modalModules";

function CancelRequest({ applicantId }) {
    const dispatch = useDispatch();

    const commit = () => {
        dispatch(deleteApplicantAPI(applicantId));
    }

    const rollback = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    return (
        <div className="modalsize111">
            <div className="inmodalcolor">
                신청 취소
            </div>
            <div className="dis-flex justify-between flex-column align-center">
                <h1 className="joinpet">신청 취소하시겠습니까?</h1>
            </div>
            <div>
                <h5>신청 후 마이페이지 신청 기록에서 확인이 가능하며,</h5>
                <h5>모집자의 쪽지를 받을 수 있습니다.</h5>
            </div>


            <div className="button2list">
                <button className="modalsize-button3" onClick={commit}>
                    예
                </button>
                <button className="modalsize-button3" onClick={rollback}>
                    아니요
                </button>
            </div>
        </div>

    )
}

export default CancelRequest;