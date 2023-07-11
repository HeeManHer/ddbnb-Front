import { deleteApplicantAPI } from "../../../api/applicantAPI";
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from "../../../modules/modalModules";
import style from './CancelSitterRequest.module.css'

function CancelSitterRequest({applicantId}) {
    const dispatch = useDispatch();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const commit = () => {
        dispatch(deleteApplicantAPI(applicantId));
    }

    const rollback = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    return (
        <div className={style.back}>
            <div className={style.Header}>
                펫시터 신청
            </div>
        {/* <div>
            <h1>신청 취소하시겠습니까?</h1>
            <div>
                <h5>신청 후 마이페이지 신청 기록에서 확인이 가능하며,</h5>
                <h5>모집자의 쪽지를 받을 수 있습니다.</h5>
            </div>



            <div>
                <button onClick={commit}>
                    예
                </button>
                <button onClick={rollback}>
                    아니요
                </button>
            </div>
        </div> */}
    </div>
    )
}

export default CancelSitterRequest;