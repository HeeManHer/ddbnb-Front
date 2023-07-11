import style from './AppliedCardBoard.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyApplyListAPI } from '../../api/applicantAPI';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { OPEN_MODAL, CLOSE_MODAL } from '../../modules/modalModules';
import CancelSitterRequest from '../modal/mypage/CancelSitterRequest';

function PetSitterAppliedCardBoard() {

    //모달
    const cancel = useSelector(state => state.modalsReducer.cancel);

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };


    //리덕스
    const dispatch = useDispatch();
    const apply = useSelector(state => state.applicantsReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const { data: applys } = apply;

    useEffect(() => {
        dispatch(getMyApplyListAPI(currentPage));

    }, [currentPage]);

    const navigate = useNavigate();



    return (
        <>
            <section className={style.section}>
                <article className={style.category}>
                    <div>전체</div>
                    <div>지역</div>
                    <div>견종</div>
                    <div>게시글명</div>
                    <div>신청일</div>
                    <div>취소</div>
                </article>
            </section>


            {Array.isArray(applys) && applys.map((apply, index) =>
                <section className={`${style.category2} ${style.flex_center}`}>
                    <div>
                        <button onClick={() => { dispatch({ type: OPEN_MODAL , payload: 'cancel' })}}>신청취소</button>
                        <Modal back-drop = "static" isOpen={cancel} onRequestClose={closeModal}>
                            {<CancelSitterRequest applicantId ={apply.appicantId}/>}
                        </Modal>
                    </div>
                    <div onClick={() => navigate(`/petsitter/${apply.boardId.boardId}`)}>{apply.boardId.location}</div>
                    <div onClick={() => navigate(`/petsitter/${apply.boardId.boardId}`)}>{apply.boardId.petShape}</div>
                    <div onClick={() => navigate(`/petsitter/${apply.boardId.boardId}`)}>{apply.boardId.boardTitle}</div>
                    <div onClick={() => navigate(`/petsitter/${apply.boardId.boardId}`)}>{apply.appliedDate}</div>
                    <div>
                        <button onClick={() => { dispatch({ type: OPEN_MODAL, payload: 'cancel' }) }}>신청취소</button>
                        {cancel && <CancelSitterRequest />}
                    </div>
                </section>
            )}


        </>
    );
}

export default PetSitterAppliedCardBoard;       