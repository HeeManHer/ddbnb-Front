import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../write/detail.css"
import ReviewModal from "../../component/modal/review/ReviewModal";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import Modal from 'react-modal';
import Declaration from "../../component/modal/declaration/Declaration";
import { getPetMomDetail } from '../../api/petDetailAPI';
import { useParams, useNavigate } from 'react-router-dom';
import { putMypetMomCancle } from '../../api/petMomAPI';
import ApplicantsList from "../../component/modal/apply/ApplicantsList"
import ApplyModal from '../../component/modal/apply/ApplyModal';
import ReviewList from '../../component/modal/review/ReviewList';
import CollectFinish from '../../component/modal/collect/CollectFinish';
import CollectCancel from '../../component/modal/collect/CollectCancel';

function PetMomRecruitDatail() {
    const navigate = useNavigate()
    const [showModalReview, setShowModalReview] = useState(false);
    const [showModalList, setShowModalList] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showApplicant, setOpenApplicant] = useState(false);

    const { declaration, petMomApply, collectCancel, collectFinish } = useSelector(state => state.modalsReducer);
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const openModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type })
    }

    const closeModalReview = () => {
        setShowModalReview(false);
    };

    const openModalList = () => {
        setShowModalList(true);
    };

    const openApplicant = () => {
        setOpenApplicant(true);
    };

    const closeApplicant = () => {
        setOpenApplicant(false);
    };

    const closeModalList = () => {
        setShowModalList(false);
    };

    const data = useSelector(state => state.petDetailReducer);
    const totalImages = data.boardImage ? data.boardImage.length : 0;
    const { boardId } = useParams();
    const onClickhandle = () => {
        dispatch(putMypetMomCancle(data.boardId, { boardStatus: "모집취소" }));
        closeModal();
        window.location.reload();
    }

    useEffect(
        () => {
            dispatch(getPetMomDetail(boardId));
        },
        []
    )

    const changeImage = (direction) => {
        let newIndex = currentImageIndex + direction;
        if (newIndex < 0) {
            newIndex = totalImages - 1; // 마지막 이미지로 순환
        } else if (newIndex >= totalImages) {
            newIndex = 0; // 첫 번째 이미지로 순환
        }
        setCurrentImageIndex(newIndex);
    };

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const postUser = token !== null && token.memberId === data.member?.memberId ? true : false;
    const isTokenNull = token === null;

    return (
        <div className={`height-auto ${showModalReview ? "modal-open" : ""}`}>
            <div className="dateAndWriter">
                <h1>게시판</h1>
                <h3 className='writer-size'>작성자: {data.member && data.member.nickname}</h3>
                <h4 >작성일 : {data.boardDate}</h4>

                {isTokenNull ?
                    null :
                    postUser ? (
                        <>
                            <button className="declarationButton" onClick={() => navigate("./modify", { replace: true })}>수정</button>
                            {data.boardStatus === '모집중' && <button className="declarationButton" onClick={() => openModal("collectCancel")}>모집취소</button>}
                        </>
                    ) : (
                        <button className="declarationButton" onClick={() => openModal("declaration")}>신고</button>
                    )
                }

                <Modal className="modal-backdrop" isOpen={declaration} onRequestClose={closeModal}>
                    <Declaration category="게시글" />
                </Modal>
                <Modal className="modal-backdrop" isOpen={collectCancel} onRequestClose={closeModal}>
                    <CollectCancel />
                </Modal>
            </div>

            <div className="dateAndWriter">
            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content" style={{ right: '4%' }}>게시판</h2>
                <h3 className="comment-content2" style={{ left: '13px' }} > 펫맘 모집  게시판</h3>
            </div>

            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">제목 </h2>
                <h3 className="comment-content2" > {data.boardTitle}</h3>
            </div>
            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">지역</h2>
                <h3 className="comment-content2" >{data.location}</h3>
            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">돌봄</h2>
                <button className={`choice-box ${data.care === '방문' ? 'selected' : ''}`}>방문</button>
                <button className={`choice-box ${data.care === '출장' ? 'selected' : ''}`}>출장</button>
                <button className={`choice-box ${data.care === '산책' ? 'selected' : ''}`}>산책</button>
            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">기간</h2>
                <h3 className="comment-content2" >{data.startDate}~{data.endDate}</h3>
                <h2 className="comment-mommoney">사례금</h2>
                <h3 className="comment-mommoney2">{data.hourlyRate} \</h3>
                <button className="comment-button1">시간당</button>
                <h3 className="comment-mommoney3">{data.dateRate} \</h3>
                <button className="comment-button2">1박</button>


            </div>
            <hr className="line"></hr>
            <div className="formsize3">
                <div className="doginfo-petmom">
                    <div className="images">
                        <button className="imageBtn" onClick={() => changeImage(-1)}> &lt; </button>
                        {data.boardImage && data.boardImage.length > 0 ? (
                            <img className='imgsize' src={data.boardImage[currentImageIndex].imageUrl} alt=" 사진이 없습니다!" />
                        ) : null}
                        <button className="imageBtn" onClick={() => changeImage(1)}> &gt; </button>
                    </div>
                </div>
                <div className="momplz">
                    <div>
                        <button className={`choice-box2 ${data.houseType === '단독주택' ? 'selected' : ''}`}>단독주택</button>
                        <button className={`choice-box2 ${data.houseType === '아파트' ? 'selected' : ''}`}>아파트</button>
                        <button className={`choice-box2 ${data.houseType === '빌라' ? 'selected' : ''}`}>빌라</button>
                        <hr className="line2"></hr>
                        <button className={`choice-box2 ${data.otherCondition && data.otherCondition.some(item => item.typeId === 1) ? 'selected' : ''}`}>픽업가능</button>
                        <button className={`choice-box2 ${data.otherCondition && data.otherCondition.some(item => item.typeId === 2) ? 'selected' : ''}`}>대형견 가능</button>
                        <button className={`choice-box2 ${data.otherCondition && data.otherCondition.some(item => item.typeId === 3) ? 'selected' : ''}`}>노견케어</button>


                        <hr className="line2"></hr>
                        <button className={`choice-box3 ${data.petYN === "반려동물 있어요" ? 'selected' : ''}`}>반려동물 있어요</button>
                        <button className={`choice-box3 ${data.petYN === "반려동물 없어요" ? 'selected' : ''}`}>반려동물 없어요</button>
                        <hr className="line2"></hr>
                        <div className="dateAndWriter">
                            <h2>특이사항</h2>
                            <textarea className="momplz-textarea1" value={data.signficant}></textarea>
                        </div>
                    </div>
                    <h2> 강아지를 맡아줄게요</h2>
                    <textarea className="momplz-textarea2" value={data.request}></textarea> </div>
            </div>
            <div>
                <div className='formSize'>
                    <hr className="line"></hr>

                    {postUser ?
                        (<>
                            <button className='wantbtn2' onClick={openApplicant}>신청자 목록</button>
                            {data.boardStatus === '모집마감' ?
                                <button className="wantbtn2" onClick={openModalList}>리뷰 작성</button> :
                                <button className="wantbtn2" onClick={() => openModal("collectFinish")}>모집마감</button>
                            }
                        </>) :
                        <button className="wantbtn2" onClick={() => openModal("petMomApply")}>신청하기</button>
                    }
                    <Modal className="modal-backdrop" isOpen={collectFinish} onRequestClose={closeModal}>
                        <CollectFinish />
                    </Modal>
                    <Modal className="modal-backdrop" isOpen={petMomApply} onRequestClose={closeModal}>
                        <ApplyModal boardId={boardId} />
                    </Modal>
                </div>
            </div>

            {showModalReview && <ReviewModal closeModalReview={closeModalReview} />}
            {showModalReview && <div className="modal-backdrop" onClick={closeModalReview} />}

            {showModalList && <ReviewList closeModalList={closeModalList} />}
            {showModalList && <div className="modal-backdrop" onClick={closeModalList} />}

            {showApplicant && <ApplicantsList />}
            {showApplicant && <div className="modal-backdrop" onClick={closeApplicant} />}
        </div >
    )

}

export default PetMomRecruitDatail;
