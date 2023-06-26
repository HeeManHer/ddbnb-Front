import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../component/item/Calendar";
import "../write/detail.css"
import ReviewModal from "../../component/modal/review/ReviewModal";
import ReviewList from "../../component/modal/review/ReviewList";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import Modal from 'react-modal';
import Declaration from "../../component/modal/declaration/Declaration";
import PetMomApply from "../../component/modal/apply/PetMomApply";
import PetSitterApply from "../../component/modal/apply/PetSitterApply";
import PetMomCollectCancle from '../../component/modal/collect/PetMomCollectCancle';
import PetMomCollectFinish from '../../component/modal/collect/PetMomCollectFinish';
import { getPetMomDetail } from '../../api/petDetailAPI';
import { useParams } from 'react-router-dom';
import { putMypetMomCancle } from '../../api/petMomAPI';



function PetMomRecruitDatail() {
    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };

    const [showModalReview, setShowModalReview] = useState(false);
    const [showModalList, setShowModalList] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { declaration: showModal, petsitterApply, petmomcollectcancle, petmomcollectfinish } = useSelector(state => state.modalsReducer);
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({ type: OPEN_MODAL, payload: "declaration" });
    };
    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const openModaljoin = () => {
        dispatch({ type: OPEN_MODAL, payload: "petsitterApply" })
    }

    const openCollectCancleModal = () => {
        dispatch({ type: OPEN_MODAL, payload: "petmomcollectcancle" });
    };

    const openCollectFinishModal = () => {
        dispatch({ type: OPEN_MODAL, payload: "petmomcollectfinish" });
    };

    const closeModalReview = () => {
        setShowModalReview(false);
    };

    const openModalList = () => {
        setShowModalList(true);
    };

    const closeModalList = () => {
        setShowModalList(false);
    };

    const data = useSelector(state => state.petDetailReducer);
    console.log(data);
    // const totalImages = petdetail.img ? petdetail.img.length : 0;
    const { boardId } = useParams();

    const onClickhandle = () => {
        dispatch(putMypetMomCancle(data.boardId, {momStatus:"모집취소"}));
        closeModal();
        window.location.reload();
    }

    const onClickhan = () => {
        dispatch(putMypetMomCancle(data.boardId, {momStatus:"모집마감"}));
        closeModal();
        window.location.reload();
    }

    useEffect(
        () => {
            dispatch(getPetMomDetail(boardId));
        },
        []
    )

    // const changeImage = (direction) => {
    //     let newIndex = currentImageIndex + direction;
    //     if (newIndex < 0) {
    //         newIndex = totalImages - 1; // 마지막 이미지로 순환
    //     } else if (newIndex >= totalImages) {
    //         newIndex = 0; // 첫 번째 이미지로 순환
    //     }
    //     setCurrentImageIndex(newIndex);
    // };



    return (
        <div className={`height-auto ${showModalReview ? "modal-open" : ""}`}>
            <div className="dateAndWriter">
                <h1>게시판</h1>
                <button className="declarationButton" onClick={openModal}>신고</button>
                <button className="declarationButton">수정</button>
                <Modal className="modal-backdrop" isOpen={showModal} onRequestClose={closeModal}>
                    <Declaration />
                </Modal>

                <button className="declarationButton" onClick={openCollectCancleModal}>모집취소</button>
                <Modal className="modal-backdrop" isOpen={petmomcollectcancle} onRequestClose={closeModal}>
                    <PetMomCollectCancle  onClickhandle={onClickhandle}/>
                </Modal>
            </div>

            <div className="dateAndWriter">
                {/* <h5>작성자 : {data.name}</h5> */}
                {/* <h5>작성일 : {data.boardDate}</h5> */}
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
            <div className="formsize">
                <div className="doginfo">
                    {/* <div className="images">
                        <button className="imageBtn" onClick={() => changeImage(-1)}> &lt; </button>
                        {data.img && data.img.length > 0 ? (
                            <img className='imgsize' src={data.img[currentImageIndex]} alt=" 사진이 없습니다!" />
                        ) : null}
                        <button className="imageBtn" onClick={() => changeImage(1)}> &gt; </button>
                    </div> */}
                    <div className="calendar">
                        <Calendar />
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
                        <button className={`choice-box3 ${data.petYN === true ? 'selected' : ''}`}>반려동물 있어요</button>
                        <button className={`choice-box3 ${data.petYN === false ? 'selected' : ''}`}>반려동물 없어요</button>
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
                <div>
                    <hr className="line"></hr>
                    <button className="wantbtn2" onClick={openModaljoin}>신청하기</button>

                    <Modal className="modal-backdrop" isOpen={petsitterApply} onRequestClose={closeModal}>
                        <PetMomApply />
                    </Modal>

                    <button className="wantbtn2"
                        onClick={openModalList}
                    >신청자 목록</button>
                    <button className="wantbtn2" onClick={openCollectFinishModal}>모집마감</button>
                    <Modal className="modal-backdrop" isOpen={petmomcollectfinish} onRequestClose={closeModal}>
                    <PetMomCollectFinish  onClickhan={onClickhan}/>
                </Modal>
                </div>
            </div>

            {showModalReview && <ReviewModal closeModalReview={closeModalReview} />}
            {showModalReview && <div className="modal-backdrop" onClick={closeModalReview} />}

            {showModalList && <ReviewList closeModalList={closeModalList} />}
            {showModalList && <div className="modal-backdrop" onClick={closeModalList} />}

        </div >
    )

}

export default PetMomRecruitDatail;
